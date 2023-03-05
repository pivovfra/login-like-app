import { useContext } from "react";
import { UserContext } from "./App";
import { Typography } from "@mui/material";
import "./App.css";

export function UserPage() {
  const { emailAddress } = useContext(UserContext);
  return emailAddress ? (
    <div className="App">
      <Typography variant="h2">
        You have been something like logged-in
      </Typography>
      <Typography variant="h3">Your e-mail is: {emailAddress}</Typography>
    </div>
  ) : (
    <div className="App">
      <Typography variant="h2">
        You need to be something like logged-in in order to access this page
      </Typography>
    </div>
  );
}
