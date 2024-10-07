import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello from server")
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});

/*-------------------------Mongodb Connection URL--------------------------------*/

let dbURL =
  "mongodb+srv://abdullahhamid955:d0RhQGVJosx6WHBV@cluster0.nnxpljx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURL);
