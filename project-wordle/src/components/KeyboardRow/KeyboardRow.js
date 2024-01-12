import React from "react";

function KeyboardRow({ letters }) {
  return (
    <div className='keyboard-row'>
      {letters.map(({ letter, status }, index) => {
        return (
          <div key={index} className={`keyboard-letter ${status}`}>
            <span>{letter}</span>
          </div>
        );
      })}
    </div>
  );
}

export default KeyboardRow;
