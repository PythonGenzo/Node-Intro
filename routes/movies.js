import express from "express";
const router = express.Router();
import { client } from "../index.js"

router.get('/',  async function (req, res) {
    // db.movies.find({})
    const movies = await client
    .db("B33WD")
    .collection("movies")
    .find({})
    .toArray();
  
      res.send(movies)
      // console.log(movies);
    });
  
router.get('/:id', async function (req, res) {
      console.log(req.params);
      const { id } = req.params;
      // const movie = movies.find((mv) => mv.id === id );
      // movie 
      // ? res.send(movie) 
      // : res.status(404).send({msg: "no such movie found"})
      // console.log(movies);
  
      // db.movies.findOne({id: '102 })
     const movie = await client
     .db("B33WD")
     .collection("movies")
     .findOne({ id : id });
  
     movie 
      ? res.send(movie) 
      : res.status(404).send({msg: "no such movie found"})
    });  
  
router.post("/", async function(req, res){
      const data = req.body;
      console.log(data);
      // db.movies.insertMany(data)
     const result = await client.db("B33WD").collection("movies").insertMany(data);
     res.send(result);
    })
  
router.delete('/:id', async function (req, res) {
      console.log(req.params);
      const { id } = req.params;
      
      // db.movies.deleteOne({id: '102 })
     const movie = await client
     .db("B33WD")
     .collection("movies")
     .deleteOne({ id : id });
  
     movie.deleteCount > 0
      ? res.send(movie) 
      : res.status(404).send({msg: "no such movie found"})
    });  
  
      
router.put("/:id", async function(req, res){
      const data = req.body;
      // console.log(data);
      const { id } = req.params;
      // db.movies.updateOne({id : id}, {$set: data})
  
     const result = await client
        .db("B33WD")
        .collection("movies")
        .updateOne({id: id}, {$set: data});
  
     res.send(result);
    });

export const moviesRouter = router;