import React from "react";

function BtnComponent(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button
          className="word-count-btn word-count-btn-gre"
          onClick={props.start}
        >
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button
            className="word-count-btn word-count-btn-red"
            onClick={props.stop}
          >
            Stop
          </button>
          <button
            className="word-count-btn word-count-btn-yel"
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button
            className="word-count-btn word-count-btn-gre"
            onClick={props.resume}
          >
            Resume
          </button>
          <button
            className="word-count-btn word-count-btn-yel"
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
