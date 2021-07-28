const express = require("express")
const carRouter = require("./routers/car-router")

const port = 3000

const app = express()
app.use(express.json()) //JSON payload support
app.use(express.urlencoded()) //URL param support

app.use("/cars", carRouter)
app.use((req, res) =>{
    res.status(404).send()
})

app.listen(port, ()=> console.log("Backend listening at port " + port))