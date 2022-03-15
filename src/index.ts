import express  from "express";
import route from "./routes";
const app = express()
app.use(express.json())

app.use(route)

app.listen(process.env.PORT, ()=>{
    console.log('App run in port 3333')
})