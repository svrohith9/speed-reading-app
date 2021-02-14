import React, { useState } from "react";
import DisplayComponent from "./Components/DisplayComponent";
import BtnComponent from "./Components/BtnComponent";
import "./App.css";

function App() {
  var sentence = "A quick brown fox ran over the dog";
  var wordsArray = sentence.split(" ");
  var index = 0;

  const [word, setWord] = useState({ word: wordsArray[index] });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  const run = () => {
    if (index > wordsArray.length) {
      index = 0;
    }
    setWord({ word: wordsArray[index++] });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setWord({ word: wordsArray[0] });
  };

  const resume = () => {
    start();
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <h1>Test your Speed Reading skill</h1>
        <div className="word-count">
          <DisplayComponent data={word.word} />
          <BtnComponent
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
