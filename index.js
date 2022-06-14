// const express = require('express')
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
// import { moviesRouter } from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";
// import bcrypt from 'bcrypt';

dotenv.config();
// console.log(process.env);

const app = express();


const PORT = process.env.PORT;

app.use(cors());



app.use(express.json());

// const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongo db is connected");
  return client;
}

 export const client =  await createConnection();

//  const companyList = [
//   {
//      "id":1,
//      "companyName":"TCS",
//      "location":"chennai",
//      "role":"MERN Full Stack",
//      "description":"MonogoDB,Express JS,React JS,Node JS",
//      "img":"https://freerangestock.com/sample/50670/globe-job-shows-employment-career-and-occupation.jpg"

//    },
//    {
//      "id":2,
//      "companyName":"Infosys",
//      "location":"chennai",
//      "role":"MERN Full Stack",
//      "description":"MonogoDB,Express JS,React JS,Node JS",
//      "img":"https://freerangestock.com/sample/50670/globe-job-shows-employment-career-and-occupation.jpg"

//    }, 
//    {
//      "id":3,
//      "companyName":"Zoho",
//      "location":"chennai",
//      "role":"MERN Full Stack",
//      "description":"MonogoDB,Express JS,React JS,Node JS",
//      "img":"https://freerangestock.com/sample/50670/globe-job-shows-employment-career-and-occupation.jpg"

//    }, 
//    {
//      "id":4,
//      "companyName":"HCL",
//      "location":"chennai",
//      "role":"MERN Full Stack",
//      "description":"MonogoDB,Express JS,React JS,Node JS",
//      "img":"https://freerangestock.com/sample/50670/globe-job-shows-employment-career-and-occupation.jpg"

//    }, 
//    {
//      "id":5,
//      "companyName":"DELL",
//      "location":"chennai",
//      "role":"MERN Full Stack",
//      "description":"MonogoDB,Express JS,React JS,Node JS",
//      "img":"https://freerangestock.com/sample/50670/globe-job-shows-employment-career-and-occupation.jpg"

//    }
//  ];

app.get("/company", async function(req, res) {
  const company = await client
    .db("B33WD")
    .collection("company")
    .find({})
    .toArray();
  res.send(company);
});

app.post("/company", async function(req, res) {
  const data = req.body;
  const result = await client
  .db("B33WD")
  .collection("company")
  .insertMany(data);

  res.send(result);
})

app.get("/user-profile", async function(req, res) {
  const user = await client
    .db("B33WD")
    .collection("user-profile")
    .find({})
    .toArray();
  res.send(user);
});

app.post("/user-profile", async function(req, res) {
  const data = req.body;
  const result = await client
    .db("B33WD")
    .collection("user-profile")
    .insertMany(data);

res.send(result);
})

app.post("/Question", async function(req, res) {
  const data = req.body;
  const result = await client
    .db("B33WD")
    .collection("Question")
    .insertMany(data);

res.send(result);
})

app.get("/Question", async function(req, res) {
  const user = await client
    .db("B33WD")
    .collection("Question")
    .find({})
    .toArray();
  res.send(user);
});



// app.use("/movies", moviesRouter);

app.use("/users", usersRouter);


app.listen(PORT, ()=> console.log(`App Started in ${PORT}`));

// password generator 

