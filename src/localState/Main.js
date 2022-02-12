import React from "react";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Varun",
      age: 18,
    };
  }
  render() {
    return (
      <div>
        <h1>My name is : {this.state.name} </h1>
        <h2>And My Age is {this.state.age}</h2>
      </div>
    );
  }
}

export default Main;
