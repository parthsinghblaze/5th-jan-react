import React from "react";

function Contact() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1>Contact Us</h1>
        <h4>9377024392 give a call</h4>

        <h1>For Enquiry</h1>
        <div className="row">
          <div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
