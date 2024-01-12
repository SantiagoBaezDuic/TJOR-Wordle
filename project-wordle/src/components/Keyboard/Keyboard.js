import React from "react";
import KeyboardRow from "../KeyboardRow/KeyboardRow";

function Keyboard({ usedLetters }) {
  const topRow = usedLetters.slice(0, 10);
  const midRow = usedLetters.slice(10, 19);
  const bottomRow = usedLetters.slice(19);

  return (
    <div className='keyboard'>
      <KeyboardRow letters={topRow} />
      <KeyboardRow letters={midRow} />
      <KeyboardRow letters={bottomRow} />
    </div>
  );
}

export default Keyboard;
