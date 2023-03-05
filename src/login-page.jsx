import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";
import { useContext, useState } from "react";
import { checkUsername } from "./check-username";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const { setEmailAddress } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [responseData, setResponseData] = useState({ data: null, error: null });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await checkUsername(input);
    setResponseData(response);
    setLoading(false);

    if (!response.error) {
      setEmailAddress(response.data);
      navigate("/user");
    }
  };

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div>
      {responseData.error && (
        <Alert severity="error">
          <AlertTitle>{responseData.error}</AlertTitle>
          {responseData.data}
        </Alert>
      )}
      <form className="App" onSubmit={handleSubmit}>
        <Typography variant="h1" component="h1">
          Login-like App
        </Typography>
        <TextField
          className="Input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="standard"
          label="User name"
          type="text"
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
