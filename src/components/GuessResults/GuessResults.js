import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ word, key }) => (
        <p key={key} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
