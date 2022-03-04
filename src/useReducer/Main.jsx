import React, { useReducer } from "react";
import images from "../image/img1.jpg";
import "./style.css";
import { CHANGE_NAME, TOGGLE_IMAGE, CLOSE_MODAL, OPEN_MODAL } from "./action";
import { reducer } from "./reducer";
function Main() {
  const initialState = {
    userName: "Hitesh",
    isImageShowing: false,
    isModalShowing: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function changeName() {
    dispatch({ type: CHANGE_NAME });
  }

  return (
    <div className="container">
      <div>
        <h1>User Name : {state.userName} </h1>
        <button onClick={changeName}>Change The Name</button>
      </div>
      <hr />
      <div>
        <button onClick={() => dispatch({ type: TOGGLE_IMAGE })}>
          Hide / Show
        </button>
        <br />
        <br />

        {state.isImageShowing ? (
          <img src={images} style={{ width: "400px" }} alt="" />
        ) : (
          ""
        )}
      </div>
      <hr />
      <div>
        <button
          onClick={() => dispatch({ type: OPEN_MODAL })}
          className="btn btn-primary"
        >
          Show Modal
        </button>

        {state.isModalShowing ? (
          <div className="custom-modal">
            <div className="custom-modal-header">
              <h2>I am Just an Modal</h2>
            </div>
            <div className="custom-modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                ratione, assumenda autem libero, quos delectus ipsa natus
                repudiandae tenetur harum sunt rem voluptas quis ipsum a
                eligendi dolores laborum nisi.
              </p>
            </div>
            <div className="custom-modal-footer">
              <button
                onClick={() => dispatch({ type: CLOSE_MODAL })}
                className="btn btn-danger"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Main;
