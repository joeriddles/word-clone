import React from "react";

import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_IN_GUESS,
} from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { range } from "../../utils";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const DEFAULT_GUESS = range(NUM_OF_LETTERS_IN_GUESS)
  .map(() => " ")
  .join("");

function Game() {
  const defaultGuesses = range(NUM_OF_GUESSES_ALLOWED).map(() => {
    return { key: crypto.randomUUID(), guess: DEFAULT_GUESS };
  });

  const [guesses, setGuesses] = React.useState(defaultGuesses);

  function addGuess(guess) {
    const firstBlankGuessIndex = guesses.findIndex(
      ({ guess }) => guess === DEFAULT_GUESS
    );
    const blankGuessItem = guesses[firstBlankGuessIndex];

    const newGuess = {
      ...blankGuessItem,
      guess,
    };

    const newGuesses = [...guesses];
    newGuesses[firstBlankGuessIndex] = newGuess;

    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>
      <GuessInput addGuess={addGuess}></GuessInput>
    </>
  );
}

export default Game;
