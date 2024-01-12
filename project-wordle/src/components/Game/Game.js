import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessTracker from '../GuessTracker/GuessTracker';
import Banner from '../Banner/Banner';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {checkGuess} from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //Word memory for saving past attempts.
  const [wordMemory, setWordMemory] = React.useState([{word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}, {word: '', id: crypto.randomUUID(), coloringData: ['', '', '', '', '']}]);
  //State for input handling.
  const [currentWord, setCurrentWord] = React.useState('');
  //State to count the amount of attempts the user made.
  const [currentTrys, setCurrentTrys] = React.useState(0);
  //Boolean to define if the input is disabled or not.
  const [isGameOver, setIsGameOver] = React.useState(false);
  //State to display either a happy or sad banner.
  const [gameStatus, setGameStatus] = React.useState('');

  function tryCurrentWord() {
    //Prevents the game from testing the word if the game is over.
    if(isGameOver) {
      return;
    }

    //Tests the word.
    const results = checkGuess(currentWord, answer).map((el) => el.status);

    //Saves the word and the coincidences in memory.
    let nextWordMemory = [...wordMemory];
    nextWordMemory[currentTrys] = {...nextWordMemory[currentTrys], word: currentWord, coloringData: results};
    setWordMemory(nextWordMemory);

    //Adds a new try.
    setCurrentTrys(currentTrys + 1);

    //Cleans the input.
    setCurrentWord('');

    //If the word is correct, ends the game ands displays a happy banner.
    if(results.every((element) => element === 'correct')) {
      setIsGameOver(true);
      setGameStatus('happy');
      return;
    }

    //If the maximum amount of trys is reached, ends the game and displays a sad banner.
    if(currentTrys >= NUM_OF_GUESSES_ALLOWED - 1) {
      setIsGameOver(true);
      setGameStatus('sad');
    }
  }

  return (<>
            <GuessTracker wordMemory={wordMemory} />
            <GuessInput currentWord={currentWord} setCurrentWord={setCurrentWord} tryCurrentWord={tryCurrentWord}  isGameOver={isGameOver}/>
            {gameStatus === '' ? null : <Banner status={gameStatus} answer={answer} currentTrys={currentTrys}/>}
          </>);
}

export default Game;
