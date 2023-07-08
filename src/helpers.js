import React from "react";
import fruits from "./foods";

const choice = () => {
  return (
    <>
      {fruits.map((fruit, index) => (
        <Foods key={index} fruit={fruit} />
      ))}
    </>
  );
}

export { choice };
