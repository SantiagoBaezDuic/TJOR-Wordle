import React from 'react';

<<<<<<< HEAD
function Banner({ currentTrys, status, answer, restartGame}) {
=======
function Banner({ currentTrys, status, answer }) {
>>>>>>> b458be11355c686ed77f6964fe30ee5845b528b3
  return <div className={`${status} banner`}>
    <p>
      {status === 'happy' ? (<><strong>Congratulations!</strong> Got it in {' '}
      <strong>{currentTrys} guesses</strong>.</>) : <>Sorry, the correct answer is <strong>{answer}</strong></>}
    </p>
<<<<<<< HEAD
    <button onClick={restartGame}>Restart</button>
=======
>>>>>>> b458be11355c686ed77f6964fe30ee5845b528b3
  </div>;
}

export default Banner;
