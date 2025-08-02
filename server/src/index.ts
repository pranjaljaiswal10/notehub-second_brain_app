import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import helmet from "helmet"


dotenv.config({
    path:"./.env"
})

const app=express()
const morganFormat = ":method :url :status :response-time ms";


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan(morganFormat))

const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server running on port:${port}`)
})