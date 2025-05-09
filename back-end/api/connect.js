import { MongoClient } from "mongodb";

const URI = "mongodb+srv://brunobeltrame7:lMv0vkdgJ37qURUY@spotify.oxxcobf.mongodb.net/?retryWrites=true&w=majority&appName=Spotify"

const client = new MongoClient(URI);

export const db = client.db("spotify");
