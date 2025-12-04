import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  // Updates seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevCount) => prevCount + 1);
    }, 1000); // Interval in milliseconds (e.g., 1000ms = 1 second)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="big-counter d-flex justify-content-center align-items-center bg-dark text-white p-3">
      <div className="digit mx-1">
        <i className="far fa-clock"></i>
      </div>
      {digits.map((digit, index) => (
        <div className="digit" key={index}>
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;
