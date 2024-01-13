import React from "react";
import { WORD_LENGTH } from "../../constants";

function GuessInput({ tryCurrentWord, isGameOver }) {
  //State for input handling.
  const [currentWord, setCurrentWord] = React.useState("");

  return (
    <>
      <form
        className='guess-input-wrapper'
        onSubmit={(event) => {
          //Prevents default behaviour
          event.preventDefault();
          //Checks the current guess
          tryCurrentWord(currentWord);
          //Cleans the input.
          setCurrentWord("");
        }}
      >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          autoFocus
          disabled={isGameOver}
          title='A 5 letter word'
          required
          pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
          maxLength={5}
          id='guess-input'
          type='text'
          value={currentWord}
          onChange={(event) => {
            setCurrentWord(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
