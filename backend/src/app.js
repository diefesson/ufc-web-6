require("dotenv").config()
const express = require("express")
const expressSession = require("express-session")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const userRouter = require("./routers/user-router")
const postRouter = require("./routers/post-router")
const commentRouter = require("./routers/comment-router")

function showEnv() {
    console.log("DATABASE_URL: " + process.env.DATABASE_URL)
}

function start() {
    const port = process.env.PORT || 3000
    const sessionSecret = process.env.SESSION_SECRET

    const app = express()
    app.use(cors())
    app.use(cookieParser())
    app.use(express.json()) //JSON payload support
    app.use(express.urlencoded({ extended: true })) //URL param support
    app.use(expressSession({
        secret: sessionSecret,
        saveUninitialized: true,
        resave: false
    }))

    app.use("/users", userRouter)
    app.use("/posts", postRouter)
    app.use("/comments", commentRouter)

    app.use((req, res) => {
        console.log("Unknow endpoint: " + req.url)
        res.status(404).send()
    })

    app.listen(port, () => console.log("Backend listening at port " + port))
}

showEnv()
start()