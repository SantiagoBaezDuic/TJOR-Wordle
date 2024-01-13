import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessTracker from "../GuessTracker/GuessTracker";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import { WORDS, EMPTY_MEMORY, LETTERS } from "../../data";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  //Word memory for saving past attempts.
  const [wordMemory, setWordMemory] = React.useState(EMPTY_MEMORY);
  //State to count the amount of attempts the user made.
  const [currentTrys, setCurrentTrys] = React.useState(0);
  //Boolean to define if the input is disabled or not.
  const [isGameOver, setIsGameOver] = React.useState(false);
  //State to display either a happy or sad banner.
  const [gameStatus, setGameStatus] = React.useState("");
  //State for the current answer selected
  const [answer, setAnswer] = React.useState("");
  //State for coloring the used letters on the keyboard
  const [usedLetters, setUsedLetters] = React.useState([...LETTERS]);

  function pickAnswer() {
    setAnswer(sample(WORDS));
  }

  // Pick a random word on game start.
  if (answer === "") {
    pickAnswer();
  }

  function setLetterStatus(status, el) {
    let nextUsedLetters = [...usedLetters];
    const indexToModify = nextUsedLetters.findIndex(
      (element) => element.letter === el.letter
    );
    nextUsedLetters[indexToModify].status = status;
    setUsedLetters(nextUsedLetters);
  }

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function tryCurrentWord(word) {
    //Prevents the game from testing the word if the game is over.
    if (isGameOver) {
      return;
    }

    //Tests the word.
    const results = checkGuess(word, answer).map((el) => {
      if (el.status === "incorrect") {
        setLetterStatus("incorrect", el);
      } else if (el.status === "misplaced") {
        setLetterStatus("misplaced", el);
      } else if (el.status === "correct") {
        setLetterStatus("correct", el);
      }

      return el.status;
    });

    //Saves the word and the coincidences in memory.
    let nextWordMemory = [...wordMemory];
    nextWordMemory[currentTrys] = {
      ...nextWordMemory[currentTrys],
      word: word,
      coloringData: results,
    };
    setWordMemory(nextWordMemory);

    //Adds a new try.
    setCurrentTrys(currentTrys + 1);

    //If the word is correct, ends the game ands displays a happy banner.
    if (results.every((element) => element === "correct")) {
      setIsGameOver(true);
      setGameStatus("happy");
      return;
    }

    //If the maximum amount of trys is reached, ends the game and displays a sad banner.
    if (currentTrys >= NUM_OF_GUESSES_ALLOWED - 1) {
      setIsGameOver(true);
      setGameStatus("sad");
    }
  }

  function restartGame() {
    setWordMemory(EMPTY_MEMORY);
    setCurrentTrys(0);
    setIsGameOver(false);
    setGameStatus("");
    pickAnswer();
    let nextUsedLetters = usedLetters.map((el) => {
      return { letter: el.letter, status: "" };
    });
    setUsedLetters(nextUsedLetters);
  }

  return (
    <>
      <GuessTracker wordMemory={wordMemory} />
      <GuessInput tryCurrentWord={tryCurrentWord} isGameOver={isGameOver} />
      <Keyboard usedLetters={usedLetters} />
      {gameStatus === "" ? null : (
        <Banner
          restartGame={restartGame}
          status={gameStatus}
          answer={answer}
          currentTrys={currentTrys}
        />
      )}
    </>
  );
}

export default Game;
