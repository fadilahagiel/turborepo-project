"use client";

import { TextField } from "@mui/material";

interface TextFieldInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  required?: boolean;
}

export default function TextFieldInput ({ label, type, value, onChange, fullWidth = true, required = true }: TextFieldInputProps) {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      required={required}
    />
  );
};
