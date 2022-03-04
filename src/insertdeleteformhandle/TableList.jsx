import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { AiOutlineDelete } from "react-icons/ai";
import { tableContext } from "./Main";

function TableList({ index, id, firstName, lastName, email }) {
  const { handleDelete } = useContext(tableContext);
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell> {lastName} </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        {" "}
        <IconButton
          variant="contained"
          color="error"
          onClick={() => handleDelete(id)}
        >
          <AiOutlineDelete />
        </IconButton>{" "}
      </TableCell>
    </TableRow>
  );
}

export default TableList;
