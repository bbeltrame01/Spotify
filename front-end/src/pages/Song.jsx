import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const song = songsArray.filter((song) => song._id === id)[0];
  const artist = artistArray.filter((artist) => artist.name === song.artist)[0];
  const artistSongs = songsArray.filter((songList) => songList.artist === artist.name);
  const randomBackId = artistSongs[Math.floor(Math.random() * (artistSongs.length - 1))]._id;
  const randomForwId = artistSongs[Math.floor(Math.random() * (artistSongs.length - 1))]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={song.image} alt={`Imagem da Musica ${song.name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artist._id}`} className="song__artist-image">
          <img width={75} height={75} src={artist.image} alt={`Imagem do Artista ${artist.name}`} />
        </Link>

        <Player duration={song.duration} audio={song.audio} randomBackId={randomBackId} randomForwId={randomForwId} />

        <div>
          <p className="song__name">{song.name}</p>
          <p>{artist.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Song;
