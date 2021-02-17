import React, { useState } from "react";
import DisplayComponent from "./Components/DisplayComponent";
import BtnComponent from "./Components/BtnComponent";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";

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
  const [value, setValue] = useState(60);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 300) {
      setValue(300);
    }
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, (60 / value) * 1000));
  };

  const run = () => {
    if (index >= wordsArray.length) {
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
    setValue(60);
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
        <Typography id="input-slider" gutterBottom>
          Choose words per minute
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 5,
                min: 0,
                max: 300,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
