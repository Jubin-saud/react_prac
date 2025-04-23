import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

function UserContextprovider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/*wrap children with UserContext.Provider and thus children can acces the context value*/}
      {children}
    </UserContext.Provider>
  );
}

export default UserContextprovider;
