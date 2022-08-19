import {getDataFishBySpecies} from "../services/fishsService.js"

export const getFishBySpecies = async (req, res) => {
	const species = req.params.species
	try{
		const result = await getDataFishBySpecies(species)
		if(result.status != null && result.status == "Failed") throw result.message
		res.status(200).json(result)
	}catch(error){
		console.log(error)
		res.status(401).json({message: result.message})
	}
}