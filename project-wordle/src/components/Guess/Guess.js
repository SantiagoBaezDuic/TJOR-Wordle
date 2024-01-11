import React from 'react';
import { range } from '../../utils';

function Guess({word, id}) {
  let wordArray = ['', '', '', '', ''];

  if(word.length > 0) {
    wordArray = word.split('');
  }

  return (<p className='guess'>
    {wordArray.map((letter, index) => {
      return (
        <span key={index} className='cell'>{letter}</span>
      )
    })}
  </p>);
}

export default Guess;
