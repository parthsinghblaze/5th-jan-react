import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { userData } from "./Main";

function ComponentB() {
  const data = useContext(userData);

  return (
    <>
      '<h2>Last Name : {data.lastName}</h2>
      <ComponentC />
    </>
  );
}

export default ComponentB;
