import React from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { AiOutlineDelete } from "react-icons/ai";

function TableList({ index, id, firstName, lastName, email, handleDelete }) {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell> {lastName} </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        {" "}
        <IconButton
          onClick={() => handleDelete(id)}
          variant="contained"
          color="error"
        >
          <AiOutlineDelete />
        </IconButton>{" "}
      </TableCell>
    </TableRow>
  );
}

export default TableList;
