import React from "react";

function Banner({ currentTrys, status, answer, restartGame }) {
  return (
    <div className={`${status} banner`}>
      <p>
        {status === "happy" ? (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{currentTrys} guesses</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>
          </>
        )}
      </p>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default Banner;
