import React from "react";

function DisplayComponent(props) {
  // console.log(props.data);
  return (
    <div>
      <span>{props.data}</span>
    </div>
  );
}

export default DisplayComponent;
