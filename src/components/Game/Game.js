import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Guess from "../Guess";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    const item = {
      value: guess,
      key: crypto.randomUUID(),
    };
    setGuesses([...guesses, item]);
  }

  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>
      <Guess addGuess={addGuess}></Guess>
    </>
  );
}

export default Game;
