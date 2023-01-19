// const express = require("express");
import express from "express";
const app = express();
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
dotenv.config();

//Connection Code
// const MONGO_URL = 'mongodb://127.0.0.1';
const MONGO_URL = process.env.MONGO_URL;  
const client = new MongoClient(MONGO_URL);   
//Top level await
await client.connect();       //call
console.log("Mongo is connected!!!");

// xml json text
// middleware - express.json() - JSON -> JS object
// app.use -> Intercepts -> applies express.json()
app.use(express.json());


const PORT = process.env.PORT;

// app.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩");
// });


app.post('/income', async (request, response) => {
const data = request.body;
//db.income.insertMany(data);
const result = await client.db("Money").collection("incexp").insertMany(data);
response.send(result);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));



