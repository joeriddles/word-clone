import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ value, key }) => (
        <p key={key} className="guess">
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
