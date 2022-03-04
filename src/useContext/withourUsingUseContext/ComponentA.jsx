import React from "react";
import ComponentB from "./ComponentB";

function ComponentA({ userName }) {
  return (
    <>
      <ComponentB userName={userName} />
    </>
  );
}

export default ComponentA;
