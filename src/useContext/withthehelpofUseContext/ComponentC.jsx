import React, { useContext } from "react";
import { userData } from "./Main";

function ComponentC() {
  const data = useContext(userData);

  return <h1>UserName : {data.firstName} </h1>;
}

export default ComponentC;
