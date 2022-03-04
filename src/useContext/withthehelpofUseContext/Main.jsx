import React, { useState, createContext } from "react";
import ComponentA from "./ComponentA";

export const userData = createContext();

function Main() {
  const [userName, setUserName] = useState({
    firstName: "Karan",
    lastName: "patel",
    age: 20,
  });

  return (
    <userData.Provider value={userName}>
      <ComponentA />
    </userData.Provider>
  );
}

export default Main;
