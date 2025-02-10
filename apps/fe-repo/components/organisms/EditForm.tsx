"use client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import EditFields from "../molecules/EditFields";
import ButtonComponent from "../atoms/ButtonComponent";
import { User } from "@/apis/user";
import ErrorText from "../atoms/ErrorText";

type FormFieldsProps = {
  user: User | null;
  submitEdit: (value: User) => void;
  error: string | null
}

export default function EditForm({user, submitEdit, error}: FormFieldsProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalAverageWeightRatings, setTotalAverageWeightRatings] =
  useState("");
  const [numberOfRents, setNumberOfRents] = useState("");
  const [recentlyActive, setRecentlyActive] = useState("");

  const changeInput = (value: string, type: string) => {
    if (type === "name") {
      setName(value);
    } else if (type === "email") {
      setEmail(value);
    } else if (type === "totalAverageWeightRatings") {
      setTotalAverageWeightRatings(value);
    } else if (type === "numberOfRents") {
      setNumberOfRents(value);
    } else if (type === "recentlyActive") {
      setRecentlyActive(value);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setTotalAverageWeightRatings(user.totalAverageWeightRatings.toString());
      setNumberOfRents(user.numberOfRents.toString());
      setRecentlyActive(user.recentlyActive.toString());
    }
  }, [user]);

  const handleSubmitEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const editedUser: User = {
      id: user?.id || '',
      name,
      email,
      totalAverageWeightRatings: parseFloat(totalAverageWeightRatings),
      numberOfRents: parseFloat(numberOfRents),
      recentlyActive: parseFloat(recentlyActive),
    };
    submitEdit(editedUser);
  }

  return (
    <Box
      sx={{
        width: "80%",
        maxWidth: 600,
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
      <form onSubmit={handleSubmitEdit} className="flex flex-col gap-4">
        {error && <ErrorText text={error} />}
        <EditFields
          name={name}
          email={email}
          totalAverageWeightRatings={totalAverageWeightRatings}
          numberOfRents={numberOfRents}
          recentlyActive={recentlyActive}
          changeInput={changeInput}
        />
        <ButtonComponent
          text="Submit"
          color="success"
          type="submit"
          textColor="white"
        />
        <ButtonComponent
          onClick={() => window.history.back()}
          text="Back"
          color="secondary"
          type="button"
          textColor="white"
        />
      </form>
    </Box>
  );
}
