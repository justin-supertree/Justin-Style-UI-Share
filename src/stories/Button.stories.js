import React from "react";
import { storiesOf } from "@storybook/react";

const Button = storiesOf("Components", module);

Button.add("Button", () => {
  const handleClickButton = () => {
    alert("Click Button!");
  };

  return <button onClick={handleClickButton}>Button</button>;
});

export default Button.stories;
