"use client";

import React from "react";
import { TableCell } from "@mui/material";

export default function TableBodyCell ({ children }: { children: React.ReactNode }) {
  return <TableCell align="center" className="text-white">{children}</TableCell>;
};

