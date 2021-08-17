const dotenv = require("dotenv")
const express = require("express")
const carRouter = require("./routers/employee-router")
const cors = require("cors")

const port = String(process.env.PORT || 3000)

const app = express()

app.use(cors())
app.use(express.json()) //JSON payload support
app.use(express.urlencoded({extended: true})) //URL param support

app.use("/employees", carRouter)
app.use((req, res) =>{
    res.status(404).send()
})

app.listen(port, ()=> console.log("Backend listening at port " + port))