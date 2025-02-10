'use client';

import React from "react";
import { TableRow } from "@mui/material";
import TableHeaderCell from "../atoms/TableHeaderCell";

type TableHeaderRowProps = {
  columns: string[]
}

export default function TableHeaderRow ({columns}: TableHeaderRowProps) {
  return (
    <TableRow sx={{ backgroundColor: "primary.main" }}>
      {columns.map((column) => <TableHeaderCell key={column} color="white" fontSize="16px">{column}</TableHeaderCell>)}
    </TableRow>
  );
};
