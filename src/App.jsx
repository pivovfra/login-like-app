import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./user-page";
import { createContext, useState } from "react";
import { LoginPage } from "./login-page";

export const UserContext = createContext({
  emailAddress: null,
  setEmailAddress: null,
});

export function App() {
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <UserContext.Provider value={{ emailAddress, setEmailAddress }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
