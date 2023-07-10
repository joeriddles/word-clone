import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.map(({ letter, status }, index) => (
        <span key={index} className={status ? `cell ${status}` : "cell"}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
