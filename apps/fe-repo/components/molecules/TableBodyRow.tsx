"use client";

import React from "react";
import { TableRow } from "@mui/material";
import TableBodyCell from "../atoms/TableBodyCell";
import ButtonComponent from "../atoms/ButtonComponent";
import { useRouter } from "next/navigation";

type TableBodyRowProps = {
  id: number;
  name: string;
  totalAverageWeightRatings: number;
  numberOfRents: number;
  recentlyActive: number;
  number: number
};

export default function TableBodyRow (props: TableBodyRowProps) {
  const router = useRouter()
  const moveToEditPage = () => {
    router.push('/edit/' + props.id)
  }
  return (
    <TableRow>
      <TableBodyCell>{props.number+1}</TableBodyCell>
      <TableBodyCell>{props.name}</TableBodyCell>
      <TableBodyCell>{props.totalAverageWeightRatings}</TableBodyCell>
      <TableBodyCell>{props.numberOfRents}</TableBodyCell>
      <TableBodyCell>{props.recentlyActive}</TableBodyCell>
      <TableBodyCell>
        <ButtonComponent
         text="Edit"
         onClick={moveToEditPage}
         color="success"
         textColor="white"
        />
      </TableBodyCell>
    </TableRow>
  );
};
