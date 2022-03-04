import React, { useState } from "react";
import images from "../image/img1.jpg";
import "./style.css";
function Main() {
  const [userName, setUserName] = useState("Hitesh");
  const [isImageShowing, setIsImageShowing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function changeName() {
    setUserName("Varun");
  }

  function handleHideShow() {
    setIsImageShowing(!isImageShowing);
  }

  function showModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="container">
      <div>
        <h1>User Name : {userName} </h1>
        <button onClick={changeName}>Change The Name</button>
      </div>
      <hr />
      <div>
        <button onClick={handleHideShow}>Hide / Show</button>
        <br />
        <br />
        {isImageShowing ? (
          <img src={images} style={{ width: "400px" }} alt="" />
        ) : (
          ""
        )}
      </div>
      <hr />
      <div>
        <button onClick={showModal} className="btn btn-primary">
          Show Modal
        </button>

        {isModalOpen ? (
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
              <button onClick={closeModal} className="btn btn-danger">
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
