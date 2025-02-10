"use client";

import React from "react";
import { TableCell } from "@mui/material";

type TableHeaderCellProps = {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
 }

export default function TableHeaderCell ({ children, color, fontSize }: TableHeaderCellProps) {
  return <TableCell align="center" sx={{ fontWeight: "bold", color: color, fontSize: fontSize, borderBottom: "1px solid black" }} variant="head">{children}</TableCell>;
};
