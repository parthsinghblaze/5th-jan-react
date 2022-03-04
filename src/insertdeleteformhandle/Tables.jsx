import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableList from "./TableList";

function Tables({ tableData }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SR NO</TableCell>
            <TableCell> First Name </TableCell>
            <TableCell> Last Name </TableCell>
            <TableCell> Email </TableCell>
            <TableCell> Action </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item, index) => {
            return <TableList {...item} index={index} key={item.id} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables;
