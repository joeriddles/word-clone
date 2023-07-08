import React from "react";

function Guess({ guess }) {
  const letters = guess.split("");

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
