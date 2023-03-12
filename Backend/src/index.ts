import express,{ Express, Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/",(req:Request,res:Response)=>{
    res.send("hello world");
})

app.listen(3000,()=>{
    console.log("http://localhost:30001123");
})