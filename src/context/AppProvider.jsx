import { useState } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AppContext.Provider value={{ token, setToken }}>
      {children}
    </AppContext.Provider>
  );
}
