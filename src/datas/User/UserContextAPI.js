import { createContext, useState } from "react";
import userAccountDatas from "../../json/userAccountDatas.json";

const UserContext = createContext({
  userAccountDatas: userAccountDatas,
});

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userAccountDatas,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
