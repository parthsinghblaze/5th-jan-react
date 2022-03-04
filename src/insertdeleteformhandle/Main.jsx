import React, { createContext, useState } from "react";
import TableList from "./TableList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tables from "./Tables";

export const tableContext = createContext();

function Main() {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      id: new Date().getTime().toString(),
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTableData([...tableData, formValue]);
    setFormValue({ firstName: "", lastName: "", email: "" });
  }

  function handleDelete(deletedId) {
    let filteredTableData = tableData.filter((item) => item.id !== deletedId);
    setTableData(filteredTableData);
  }

  return (
    <tableContext.Provider value={{ handleDelete }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-primary text-center">Add Members</h2>
            <input
              type="text"
              className="form-control my-3"
              placeholder="first name"
              value={formValue.firstName}
              name="firstName"
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control my-3"
              placeholder="last name"
              value={formValue.lastName}
              name="lastName"
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control my-3"
              placeholder="email"
              value={formValue.email}
              name="email"
              onChange={handleChange}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Add Members
            </button>
          </div>
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-primary py-4">Your Data</h2>
            <Tables tableData={tableData} />
          </div>
        </div>
      </div>
    </tableContext.Provider>
  );
}

export default Main;
