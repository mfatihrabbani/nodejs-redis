import express from "express"
import {getProductById} from "./controllers/productsController.js"

const app = express()

app.get("/api/products/:id", getProductById)

app.listen(3000, () => {
	console.log("Server running on port 3000")
})