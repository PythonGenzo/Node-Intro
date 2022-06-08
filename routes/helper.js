import { client } from "../index.js";
import { ObjectId } from "mongodb";

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
        .deleteOne({ _id: ObjectId(id) });
}
export async function updateMovieById(id, data) {
    return await client
        .db("B33WD")
        .collection("movies")
        .updateOne({ _id: ObjectId(id) }, { $set: data });
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
        .findOne({ _id: ObjectId(id) });
}

// signup users
export async function createUser(data) {
    return await client.db("B33WD").collection("users").insertOne(data);
}

export async function getUserByName(username) {
    const user = await client 
    .db("B33WD")
    .collection("users")
    .findOne({ username: username });

    return user;
}