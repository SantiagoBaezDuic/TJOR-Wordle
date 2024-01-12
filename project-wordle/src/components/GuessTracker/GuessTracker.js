import React from 'react';
import Guess from '../Guess/Guess';

function GuessTracker({ wordMemory }) {
  return (<div className='guess-results'>
            {wordMemory.map(({word, id, coloringData}) => {
              return (
                <Guess word={word} key={id} id={id} coloringData={coloringData} />
              )
            })}
          </div>);
}

export default GuessTracker;
