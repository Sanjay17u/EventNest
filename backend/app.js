import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import dotenv from 'dotenv'
import messageRouter from './router/message.router.js'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/message', messageRouter)

dbConnection()

export default app

