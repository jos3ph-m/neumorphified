import React from "react";

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
      <p>{lengthMessage}</p>
    </div>
  );
};

export default lengthCheck;
