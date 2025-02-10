"use client";
import { Button } from "@mui/material";

interface ButtonComponentProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  textColor?: string;
  color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

export default function ButtonComponent ({ text, onClick, color, textColor, type = "button" }: ButtonComponentProps) {
  return (
    <Button variant="contained" color={color} type={type} onClick={onClick} sx={{ color: textColor }}>
      {text}
    </Button>
  );
};
