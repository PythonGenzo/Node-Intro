import express from "express";
import bcrypt from 'bcrypt';
import { createUser, getUserByName } from "./helper.js"


const router = express.Router();

async function genHashPassword(password) {
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    // console.log("salt", salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log("hashedPassword", hashedPassword);
    return hashedPassword;
  }
  
  genHashPassword("password@123")
  
router.post("/signup", async function(req, res){

  const {username, password} = req.body;
    
  const hashedPassword = await genHashPassword(password);

  const isUserExist = await getUserByName(username);
  console.log(username, isUserExist );


  // const result = await createUser({
  //    username: username,
  //    password: hashedPassword
  // });
  
  // res.send(result);
  // res.send(hashedPassword)
  res.send(isUserExist);

  
    });
  


export const usersRouter = router;


