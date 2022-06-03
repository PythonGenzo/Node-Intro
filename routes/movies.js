import express from "express";
const router = express.Router();
import { 
    getAllMovie,
    getOneMovie,
    createMovies,
    deleteMoviesById, 
    updateMovieById } from "./helper.js";

router.get('/',  async function (req, res) {
    // db.movies.find({})
    const movies = await getAllMovie();
  
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
     const movie = await getOneMovie(id);
  
     movie 
      ? res.send(movie) 
      : res.status(404).send({msg: "no such movie found"})
    });  
  
router.post("/", async function(req, res){
      const data = req.body;
      console.log(data);
      // db.movies.insertMany(data)
     const result = await createMovies(data);
     res.send(result);
    })
  
router.delete('/:id', async function (req, res) {
      console.log(req.params);
      const { id } = req.params;
      
      // db.movies.deleteOne({id: '102 })
     const movie = await deleteMoviesById(id);
  
     movie.deleteCount > 0
      ? res.send(movie) 
      : res.status(404).send({msg: "no such movie found"})
    });  
  
      
router.put("/:id", async function(req, res){
      const data = req.body;
      // console.log(data);
      const { id } = req.params;
      // db.movies.updateOne({id : id}, {$set: data})
  
     const result = await updateMovieById(id, data);
  
     res.send(result);
    });

export const moviesRouter = router;


