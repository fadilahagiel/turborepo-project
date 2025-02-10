"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, CircularProgress, Typography } from "@mui/material";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../apis/firebase";
import LoginFields from "../molecules/LoginFields";
import ButtonComponent from "../atoms/ButtonComponent";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState("Login");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Login successful!");
      const token = await userCredentials.user.getIdToken();

      document.cookie = `authToken=${token}; path=/`;
      router.push("/home");
    } catch (err: any) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign up successful!");
      router.push("/home");
    } catch (err: any) {
      setError("Invalid email or password");
    }
  };

  const changeType = () => {
    if (type === "Login") {
      setType("Sign Up");
    } else {
      setType("Login");
    }
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            width: "80%",
            maxWidth: 400,
            margin: "auto",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: "1px solid #ccc",
            borderRadius: 4,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" textAlign="center">
            {type}
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form
            onSubmit={type === "Login" ? handleLogin : handleSignUp}
            className="flex flex-col gap-4"
          >
            <LoginFields
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
            <ButtonComponent
              text={type}
              color={type === "Login" ? "primary" : "secondary"}
              type="submit"
            />
            <Typography variant="body1" textAlign="center">
              {type === "Login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <span
                className="hover:underline hover:cursor-pointer"
                onClick={changeType}
                style={{ color: "blue" }}
              >
                {type === "Login" ? "Sign Up" : "Login"}
              </span>
            </Typography>
          </form>
        </Box>
      )}
    </>
  );
}
