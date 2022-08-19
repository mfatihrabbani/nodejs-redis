import express from "express"
import {getFishBySpecies} from "./controllers/fishsController.js"

const app = express()

app.get("/api/fish/:species", getFishBySpecies)

app.listen(3000, () => {
	console.log("Server running on port 3000")
})