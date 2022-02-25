import React, { useState } from "react";

function Main() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);

  function handlingChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handlingSubmit() {
    setTableData([...tableData, formValue]);
    console.log(tableData);
    setFormValue({ firstName: "", lastName: "", email: "" });
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-primary text-center">Multiple Form</h2>
          <input
            type="text"
            className="form-control my-3"
            placeholder="first name"
            name="firstName"
            value={formValue.firstName}
            onChange={handlingChange}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="last name"
            name="lastName"
            value={formValue.lastName}
            onChange={handlingChange}
          />
          <input
            type="text"
            className="form-control my-3"
            placeholder="email"
            name="email"
            value={formValue.email}
            onChange={handlingChange}
          />
          <button className="btn btn-primary" onClick={handlingSubmit}>
            Add Data
          </button>
        </div>
        <div className="col-md-6">
          <table className="table table-primary">
            {tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {item.firstName} </td>
                  <td> {item.lastName} </td>
                  <td> {item.email} </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>

    // <div className="container py-5">
    //   <div className="row">
    //     <div className="col-md-6 offset-md-3">
    //       <h2 className="text-primary text-center">Multiple Form</h2>
    //       <input
    //         type="text"
    //         className="form-control my-3"
    //         placeholder="first name"
    //         value={firstName}
    //         onChange={(e) => setFirstName(e.target.value)}
    //       />
    //       <input
    //         type="text"
    //         className="form-control my-3"
    //         placeholder="last name"
    //         value={lastName}
    //         onChange={(e) => setLastName(e.target.value)}
    //       />
    //       <input
    //         type="text"
    //         className="form-control my-3"
    //         placeholder="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <button className="btn btn-primary">Add Data</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Main;
