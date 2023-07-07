import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmit}>
      <label htmlFor="guess">Enter guess:</label>
      <input
        id="guess"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="\w{5}" // minLength is wonky, use pattern too
        title="5 letters"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Game;
