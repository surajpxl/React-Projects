import React, { useState } from "react";
import userContext from "./createContext";  

const contextProvider = ({children}) => {
    const[user, setUser] = useState(null)
    return(
        <userContext.Provider value = {{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}
export default contextProvider;