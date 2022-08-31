import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var emojiDB = {
    "😄": "Smile",
    "😁": "Grin",
    "😂": "Joy",
    "😊": "Blush",
    "😍": "Heart eyes",
    "😋": "Yum",
    "😑": "Expressionless",
    "🤔": "Thinking face",
    "😒": "Unamused face",
    "😴": "Sleeping face"
  };

  var emojiArray = Object.keys(emojiDB);

  var [inputEmoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("Emoji meaning will appear here");

  var handleUserInput = (event) => {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    var meaning = emojiDB[inputEmoji];
    if (inputEmoji in emojiDB) {
      setMeaning(meaning);
    } else setMeaning("Emoji not found in DB");
  };

  var emojiClickHandler = (item) => {
    var meaning = emojiDB[item];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Find Your Emoji</h1>
      <input onChange={handleUserInput} placeholder="Search your emoji"></input>
      <p>
        <span className="emoji-meaning">
          <b>{meaning}</b>
        </span>
      </p>
      <p>
        <b>All emojis in DB:</b>
      </p>
      <div>
        {emojiArray.map((item) => {
          return (
            <span onClick={() => emojiClickHandler(item)} className="allEmoji">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/*
VISER:
View > Interact > State in Event Handler > Render
View: Render a view
Interact: User will interact with the view
State in Event Handler: Update the state in event handler
Render: Render the view
*/
