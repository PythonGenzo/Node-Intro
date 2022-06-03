import { client } from "../index.js";

export async function createMovies(data) {
    return await client
        .db("B33WD")
        .collection("movies")
        .insertMany(data);
}
export async function deleteMoviesById(id) {
    return await client
        .db("B33WD")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function updateMovieById(id, data) {
    return await client
        .db("B33WD")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function getAllMovie() {
    return await client
        .db("B33WD")
        .collection("movies")
        .find({})
        .toArray();
}
export async function getOneMovie(id) {
    return await client
        .db("B33WD")
        .collection("movies")
        .findOne({ id: id });
}
