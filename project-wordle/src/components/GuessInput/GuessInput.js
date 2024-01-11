import React from 'react';

function GuessInput({ currentWord, setCurrentWord, tryCurrentWord }) {

  return <>
    <form className='guess-input-wrapper' onSubmit={event => {
      event.preventDefault();
      tryCurrentWord()
      }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input title='A 5 letter word' required pattern='.{5}' maxLength={5} id='guess-input' type='text' value={currentWord} onChange={event => {
        setCurrentWord(event.target.value.toUpperCase());
      }}/>
    </form>
  </>;
}

export default GuessInput;
