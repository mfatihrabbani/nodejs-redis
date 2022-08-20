import redisClient from "../configs/redisConfig.js"
import axios from "axios"

const fetchDataApi = async (id) => {
	const response = await axios.get(`http://localhost:3001/api/products/${id}`)
	return response.data
}

export const getDataProductById = async (id) => {
	try{
		const checkCache = await redisClient.get(id)
		let isFromCache = false
		let results
		if(checkCache){
			isFromCache = true
			console.log(checkCache)
			results = JSON.parse(checkCache)
			return {isFromCache, data: results}
		}else{
			results = await fetchDataApi(id)
			console.log(results)
			if(results.length == 0) throw "Api data empty array"
			await redisClient.set(id, JSON.stringify(results), {
				EX: 10,
				NX: true,
			})
			return {isFromCache, data: results}
		}
	}catch(error){
		console.log(error)
		return {status: "Failed", message: "Data unavaible"}
	}
}