import React, { useState } from "react";

function StateExample() {
  // const [variableName , function] = useState();
  const [formValue, setFormValue] = useState("");
  const [firstName, setFirstName] = useState([
    "alifya",
    "krupa",
    "varun",
    "hitesh",
  ]);

  function clearData() {
    setFirstName([]);
  }

  function handleChange(e) {
    const { value } = e.target;
    setFormValue(value);
  }

  function addFriend() {
    setFirstName([...firstName, formValue]);
    setFormValue("");
  }

  return (
    <div className="container">
      <h2>State</h2>
      <h3>Friends list</h3>
      <h4>Total Friend list {firstName.length}</h4>
      <input value={formValue} type="text" onChange={handleChange} />{" "}
      <button onClick={addFriend}>Add Friends</button>
      <ol>
        {firstName.map((item, index, ent) => {
          console.log(index);
          return <li key={index}> {item} </li>;
        })}
      </ol>
      <button onClick={clearData}>Clear All</button>
    </div>
  );
}

export default StateExample;
