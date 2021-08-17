const dotenv = require("dotenv")
const express = require("express")
const employeeRouter = require("./routers/employee-router")
const cors = require("cors")

function configEnv() {
    dotenv.config()
    console.log("PGHOST: " + process.env.PGHOST)
    console.log("PGPORT: " + process.env.PGPORT)
    console.log("PGDATABASE: " + process.env.PGDATABASE)
    console.log("PGUSER: " + process.env.PGUSER)
    console.log("PORT: " + process.env.PORT)
}

function start() {
    const port = process.env.PORT || 3000

    const app = express()
    app.use(cors())
    app.use(express.json()) //JSON payload support
    app.use(express.urlencoded({ extended: true })) //URL param support

    app.use("/employees", employeeRouter)
    app.use((req, res) => {
        res.status(404).send()
    })

    app.listen(port, () => console.log("Backend listening at port " + port))
}

configEnv()
start()