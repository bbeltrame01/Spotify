import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas" itemsCount={10} itemsArray={artistArray} path="/artists" idPath="/artist" />

      <ItemList title="Músicas" itemsCount={20} itemsArray={songsArray} path="/songs" idPath="/song" />
    </div>
  )
}

export default Main;