import redisClient from "../configs/redisConfig.js"
import axios from "axios"

const fetchDataApi = async (data) => {
	const response = await axios.get("https://www.fishwatch.gov/api/species/${data}")
	return respons.data
}

export const getDataFishBySpecies = async (species) => {
	try{
		const result = await fetchDataApi(species)
		if(result.length == 0) throw "Api data empty array"
		return {isFromCache: false, data: result}
	}catch(error){
		console.log(error)
		return {status: "Failed", message: "Data unavaible"}
	}
}