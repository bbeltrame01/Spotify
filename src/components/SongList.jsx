import SongItem from "./SongItem";
import React, { useState } from "react";

const SongList = ({ artistSongs }) => {
  const [items, setItems] = useState(5);

  return <div className="song-list">

    {artistSongs.filter((_, idx) => idx < items).map((song, idx) => (
      <SongItem song={song} index={idx} key={idx} />
    ))}

    <p 
      className="song-list__see-more"
      onClick={() => {setItems(items + 5)}}
    >
      Ver mais
    </p>
  </div>
}

export default SongList;