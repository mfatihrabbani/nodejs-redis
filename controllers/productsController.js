import {getDataProductById} from "../services/productsService.js"

export const getProductById = async (req, res) => {
	const species = req.params.id
	try{
		const result = await getDataProductById(species)
		if(result.status != null && result.status == "Failed") throw result.message
		res.status(200).json(result)
	}catch(error){
		console.log(error)
		res.status(401).json({message: error})
	}
}