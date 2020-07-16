import React from "react";
import "./Length.css";

const lengthCheck = (props) => {
  const { inputLength } = props;
  let lengthMessage = "";

  if (inputLength === 0) {
    lengthMessage = "Please enter characters above";
  } else {
    lengthMessage = "Current amount of characters is: ";
  }

  return (
    <div>
      <p className="length">
        {inputLength === 0 ? lengthMessage : lengthMessage + inputLength}
      </p>
    </div>
  );
};

export default lengthCheck;
