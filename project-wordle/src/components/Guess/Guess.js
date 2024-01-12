import React from 'react';
import { range } from '../../utils';

function Guess({word, id, coloringData}) {
  let wordArray = ['', '', '', '', ''];

  if(word.length > 0) {
    wordArray = word.split('');
  }

  return (<p className='guess'>
    {wordArray.map((letter, index) => {
      return (
        <span key={index} className={`cell ${coloringData[index]}`}>{letter}</span>
      )
    })}
  </p>);
}

export default Guess;
