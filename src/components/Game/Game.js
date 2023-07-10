import React from "react";

import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_IN_GUESS,
} from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { range, sample } from "../../utils";

import Banner from "../Banner";
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
  const [numGuesses, setNumGuesses] = React.useState(0);
  const [gameState, setGameState] = React.useState("in-progress");

  const isGameOver = gameState !== "in-progress";

  function addGuess(guess) {
    const newGuesses = [...guesses];
    const newNumGuesses = numGuesses + 1;
    setNumGuesses(newNumGuesses);

    const guessResult = checkGuess(guess, answer);
    newGuesses[newNumGuesses - 1] = guessResult;
    setGuesses(newGuesses);

    const hasWon = guess === answer;
    const hasLost = newNumGuesses === NUM_OF_GUESSES_ALLOWED;
    setGameState(hasWon ? "won" : hasLost ? "lost" : "in-progress");
  }

  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>
      <GuessInput addGuess={addGuess} disabled={isGameOver}></GuessInput>
      {isGameOver &&
        (gameState === "won" ? (
          <Banner type="happy">
            <b>Congragulations!</b> Got it in <b>{numGuesses} guesses.</b>
          </Banner>
        ) : (
          <Banner type="sad">
            Sorry, the correct answer is <b>{answer}</b>.
          </Banner>
        ))}
    </>
  );
}

export default Game;
