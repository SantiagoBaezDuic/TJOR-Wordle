import React from 'react';
import { range } from '../../utils';

function Guess({word, coloringData}) {
  //Empty array so all rounds are displayed
  let wordArray = ['', '', '', '', ''];

  //If there's a word on this attempt, convert it into an array
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
