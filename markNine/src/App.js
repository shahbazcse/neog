import { useState } from "react";
import "./styles.css";

export default function App() {
  var songsDB = {
    Pop: [
      { name: "As It Was", artist: "Harry Styles" },
      { name: "Levitating", artist: "Dua Lipa" },
      { name: "Shivers", artist: "Ed Sheeran" },
      { name: "Light Switch", artist: "Charlie Puth" }
    ],
    Rock: [
      { name: "Heat Above", artist: "Greta Van Fleet" },
      { name: "You're to Blame", artist: "Mammoth WVH" },
      { name: "Long Way", artist: "Eddie Vedder" },
      { name: "Don't Hate Me", artist: "Badflower" }
    ],
    EDM: [
      { name: "Early Hours", artist: "Ben Bohmer" },
      { name: "Hey Baby", artist: "I, Jordan" },
      { name: "Drifting", artist: "Harald Bjork" },
      { name: "Days of Leisure", artist: "Vernon Felicity" }
    ],
    HipHop: [
      { name: "Staying Alive", artist: "DJ Khaled" },
      { name: "God's Plan", artist: "Drake" },
      { name: "Highest In The Room", artist: "Travis Scott" },
      { name: "Alone", artist: "Rod Wave" }
    ],
    Jazz: [
      { name: "Beautiful Stranger", artist: "Laufey" },
      { name: "Breathe", artist: "Osive" },
      { name: "Tributary", artist: "Julian Lage" },
      { name: "Face in the Crowd", artist: "Kansas Smitty's" }
    ]
  };

  var [selectedGenre, setGenre] = useState("Pop");

  var genreHandler = (genre) => {
    var selectedGenre = genre;
    setGenre(selectedGenre);
  };

  return (
    <div className="App">
      <h1 className="brand">
        Muzically
        <span>
          <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/musical-note_1f3b5.png"></img>
        </span>
      </h1>
      <p>
        Checkout the top musical hits of the year. Select a genre to get
        started.
      </p>
      <div className="container">
        {Object.keys(songsDB).map((genre) => {
          return (
            <button
              onClick={() => genreHandler(genre)}
              className="btn-genre link-active"
            >
              {genre}
            </button>
          );
        })}
        <hr></hr>
        {songsDB[selectedGenre].map((song) => (
          <div className="mini-container">
            <b>
              <span className="song">{song.name}</span>
              <br></br>
              <small style={{ padding: "1rem" }} className="artist">
                <span>- </span>
                {song.artist}
              </small>
            </b>
          </div>
        ))}
      </div>
    </div>
  );
}
