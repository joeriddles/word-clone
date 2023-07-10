import React from "react";

import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_IN_GUESS,
} from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { range, sample } from "../../utils";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const DEFAULT_GUESS = range(NUM_OF_LETTERS_IN_GUESS).map(() => {
  return { letter: " ", status: undefined };
});

function Game() {
  const defaultGuesses = range(NUM_OF_GUESSES_ALLOWED).map(() => DEFAULT_GUESS);
  const [guesses, setGuesses] = React.useState(defaultGuesses);

  function addGuess(guess) {
    const newGuesses = [...guesses];
    const guessResult = checkGuess(guess, answer);
    const firstBlankGuessIndex = guesses.findIndex((guess) =>
      guess.every(({ letter }) => letter === " ")
    );
    newGuesses[firstBlankGuessIndex] = guessResult;
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
