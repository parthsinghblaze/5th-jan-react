import React, { useState } from "react";
import ComponentA from "./ComponentA";

function Main() {
  const [userName, setUserName] = useState("Karan");

  return (
    <div className="container">
      <h1>I am Main Component</h1>
      <ComponentA userName={userName} />
    </div>
  );
}

export default Main;
