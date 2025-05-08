import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { artistArray } from "../assets/database/artists";
import SongList from "../components/SongList";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();
  const artist = artistArray.filter((artist) => artist.id === Number(id))[0];
  const artistSongs = songsArray.filter((songList) => songList.artist === artist.name);
  const ramdomId = Math.floor(Math.random() * (artistSongs.length - 1));

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{ backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artist.banner})` }}
      >
        <h2 className="artist__title">{artist.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList artistSongs={artistSongs} />
      </div>

      <Link to={`/song/${ramdomId}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  )
}

export default Artist;
