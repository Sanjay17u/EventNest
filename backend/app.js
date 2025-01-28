import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import dotenv from 'dotenv'
import messageRouter from './router/message.router.js'
import path from 'path'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: "Content-Type",
    credentials: true,
}));


const DIRNAME = path.resolve()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/message', messageRouter)


app.use(express.static(path.join(DIRNAME, "/frontend/dist")));
app.use("*", (_,res) => {
    res.sendFile(path.resolve(DIRNAME, "frontend", "dist", "index.html"))
})


dbConnection()

export default app

