import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, getUserByName } from "./helper.js";

const router = express.Router();

async function genHashPassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  // console.log("salt", salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  // console.log("hashedPassword", hashedPassword);
  return hashedPassword;
}

// genHashPassword("password@123")

router.post("/signup", async function (req, res) {
  const { username, password } = req.body;

  const hashedPassword = await genHashPassword(password);

  const isUserExist = await getUserByName(username);
  console.log(username, isUserExist);

  if (isUserExist) {
    res.status(400).send({ msg: "Choose another username" });
  } else {
    const result = await createUser({
      username: username,
      password: hashedPassword,
    });

    res.send(result);
  }
  // res.send(hashedPassword)
  // res.send(isUserExist);
});

router.post("/login", async function (req, res) {

  const { username, password } = req.body;

  const userFromDB = await getUserByName(username);
  console.log(userFromDB);

  if(!userFromDB) {
    res.status(401).send({ msg: "invalid Credential"});
  } else {
    const storedDBPassword = userFromDB.password;
    const isPasswordMatch = await bcrypt.compare(password, storedDBPassword);
    console.log(isPasswordMatch);

    if(isPasswordMatch) {
      const token = jwt.sign({id:userFromDB._id  }, process.env.SECRET_KEY)
      res.send({ msg: "successful login", token: token });
    } else {
        res.status(401).send({ msg: "invalid Credential"});
    }

    // res.send(isPasswordMatch);
  }
  });


export const usersRouter = router;
