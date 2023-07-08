import React from "react";

import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, key }) => (
        <Guess key={key} guess={guess}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
