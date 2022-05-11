import { createContext, useState } from "react";

export const UserLoginContext = createContext();
function UserLoginProvider({ children }) {
  const [isJustLogged, setIsJustLogged] = useState(false);
  return (
    <UserLoginContext.Provider value={{ isJustLogged, setIsJustLogged }}>
      {children}
    </UserLoginContext.Provider>
  );
}

export default UserLoginProvider;
