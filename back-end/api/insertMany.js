import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((artist) => {
  const newArtist = { ...artist };
  delete newArtist.id

  return newArtist;
});

const newSongsArray = songsArray.map((song) => {
  const newSong = { ...song };
  delete newSong.id

  return newSong;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db.collection("artists").insertMany(newArtistArray);
