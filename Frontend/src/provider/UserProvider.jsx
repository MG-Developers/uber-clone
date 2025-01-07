import React, { useState } from "react";
import { UserContext } from "../context/UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullname: { firstname: "", lastname: "" },
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
