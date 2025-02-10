'use client';
import TextFieldInput from "../atoms/TextFieldInput";

interface FormFieldsProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

export default function LoginFields({
  email,
  password,
  setEmail,
  setPassword,
}: FormFieldsProps) {
  return (
    <>
      <TextFieldInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextFieldInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
}
