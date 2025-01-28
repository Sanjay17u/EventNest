import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import dotenv from 'dotenv'
import messageRouter from './router/message.router.js'
import path from 'path'
import cors from 'cors'
dotenv.config()

dbConnection()


const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: "Content-Type",
    credentials: true,
}));


const __dirname = path.dirname(new URL(import.meta.url).pathname);


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/message', messageRouter)


// Adjust the static file path
const frontendPath = path.resolve(__dirname, '..', 'frontend', 'dist')  // Going one level up to the root folder

app.use(express.static(frontendPath))

app.get('*', (_, res) => {
    res.sendFile(path.resolve(frontendPath, 'index.html'))
})


const port = process.env.PORT || 10000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on ${port}`)
})


export default app

