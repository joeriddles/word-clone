import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, key }) => (
        <p key={key} className="guess">
          {guess.map((letter, index) => (
            <span key={index} className="cell">
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
