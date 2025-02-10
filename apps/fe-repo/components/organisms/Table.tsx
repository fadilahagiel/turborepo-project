'use client';
import * as React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from "@mui/material";
import TableHeaderRow from "../molecules/TableHeaderRow";
import TableBodyRow from "../molecules/TableBodyRow";
import { User } from "@/apis/user";

export default function DataTable({users}: any) {

  const columns = [
    "No",
    "Name",
    "Avg. Weight Rating",
    "Number of Rents",
    "Recently Active",
    "Actions"
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        borderRadius: 2, 
        overflow: "hidden",
      }}
    >
      <Table className="" style={{ borderRadius: "10px" }}>
        <TableHead>
          <TableHeaderRow columns={columns} />
        </TableHead>
        <TableBody>
          {users.map((user: any, id: number) => (
            <TableBodyRow key={id} number={id} {...user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
