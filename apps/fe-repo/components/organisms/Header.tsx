"use client";

import { Button, Typography, Box } from "@mui/material";

export default function Header({title}: {title: string}) {
  const logoutHandler = () => {
    document.cookie = `authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    window.location.href = "/login";
  };

  return (
    <div className="w-full flex justify-between" >
      <div></div>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={logoutHandler}
        sx={{
          textTransform: "none",
        }}
      >
        Logout
      </Button>
    </div>
  );
}
