import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmit}>
      <label htmlFor="guess">Enter guess:</label>
      <input
        id="guess"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="\w{5}" // minLength is wonky, use pattern too
        title="5 letters"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Guess;
