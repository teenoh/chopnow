import express from "express"
import bodyParser from "body-parser"


import mealRoutes from "./routes/meal.route"
import menuRoutes from "./routes/menu.route"
import orderRoutes from "./routes/order.route"

const app = express()

const PORT = 9001

app.use(bodyParser.json())

app.get("/",  (req, res) =>  {
    return res.send("The API is ready!")
})

app.use("/api/v1/meals", mealRoutes)
app.use("/api/v1/menu", menuRoutes)
app.use("/api/v1/orders", orderRoutes)


app.listen(PORT,  () =>  {
    console.log(`Server is running on PORT ${PORT}`)
})