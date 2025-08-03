import React from "react";
import userContext from "./createContext";

function ContextProvider({ children }) {
  const [user, setUser] = React.useState({name: 'suraj', age: 22});
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default ContextProvider;
