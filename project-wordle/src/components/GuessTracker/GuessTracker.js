import React from 'react';
import Guess from '../Guess/Guess';

function GuessTracker({ wordMemory }) {
  return (<div className='guess-results'>
            {wordMemory.map(({word, id}) => {
              return (
                <Guess word={word} key={id} id={id}></Guess>
              )
            })}
          </div>);
}

export default GuessTracker;
