import React from "react";
import "./Length.css";

const lengthCheck = (props) => {
  const { inputLength } = props;
  let lengthMessage = "";

  if (inputLength >= 5) {
    lengthMessage = "Long enough";
  } else if (inputLength === 0) {
    lengthMessage = "There's no message";
  } else {
    lengthMessage = "Not long enough";
  }

  return (
    <div>
      <p className="length">Current length is: {inputLength}</p>
    </div>
  );
};

export default lengthCheck;
