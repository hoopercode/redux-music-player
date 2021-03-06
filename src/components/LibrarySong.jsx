import React from "react";

import { playAudio } from "../util";

const LibrarySong = ({ isPlaying, song, songs, setCurrentSong, id, audioRef, setSongs }) => {
  const songSelectHandler = () => {
    const newSongs = songs.map((song)=>{
      if(song.id === id){
        return {
          ...song,
          active: true,
        }
          
        } else {
          return {
            ...song,
            active: false,
      }
    }
    });
    setSongs(newSongs)
    setCurrentSong(song);
    playAudio(isPlaying, audioRef)
    
  };
  return (
    <div className={`library-song ${song.active ? 'selected' : ""}`} onClick={songSelectHandler} >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
