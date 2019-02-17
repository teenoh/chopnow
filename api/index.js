import express from "express"
import bodyParser from "body-parser"


import mealRoutes from "./routes/meal.route"

const app = express()

const PORT = 9001

app.use(bodyParser.json())

app.get("/",  (req, res) =>  {
    return res.send("The API is ready!")
})

app.use("/api/v1/meals", mealRoutes)


app.listen(PORT,  () =>  {
    console.log(`Server is running on PORT ${PORT}`)
})