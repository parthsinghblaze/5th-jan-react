import React from "react";
import ComponentC from "./ComponentC";

function ComponentB({ userName }) {
  return <ComponentC userName={userName} />;
}

export default ComponentB;
