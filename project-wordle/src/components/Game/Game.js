import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessTracker from '../GuessTracker/GuessTracker';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {checkGuess} from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordMemory, setWordMemory] = React.useState([{word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}]);
  const [currentWord, setCurrentWord] = React.useState('');
  const [currentTrys, setCurrentTrys] = React.useState(0);

  function tryCurrentWord() {
    if(currentTrys >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("Maximum attempts reached!");
      return;
    }

    const results = checkGuess(currentWord, answer).map((el) => el.status);

    console.info({ guess: currentWord });

    let nextWordMemory = [...wordMemory];
    nextWordMemory[currentTrys] = {...nextWordMemory[currentTrys], word: currentWord, coloringData: results};

    setWordMemory(nextWordMemory);
    setCurrentTrys(currentTrys + 1);
    setCurrentWord('');
  }

  return (<>
            <GuessTracker wordMemory={wordMemory} />
            <GuessInput currentWord={currentWord} setCurrentWord={setCurrentWord} tryCurrentWord={tryCurrentWord} />
          </>);
}

export default Game;
