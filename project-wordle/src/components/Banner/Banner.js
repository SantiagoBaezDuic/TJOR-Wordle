import React from 'react';

function Banner({ currentTrys, status, answer }) {
  return <div className={`${status} banner`}>
    <p>
      {status === 'happy' ? (<><strong>Congratulations!</strong> Got it in {' '}
      <strong>{currentTrys} guesses</strong>.</>) : <>Sorry, the correct answer is <strong>{answer}</strong></>}
    </p>
  </div>;
}

export default Banner;
