import { createContext, useState } from 'react';
import userAccountDatas from "../../json/userAccountDatas.json";

const UserContext = createContext({
    userAccountDatas: userAccountDatas,
    count: 0,
});

const UserProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [ userData, setUserData ] = useState([])

  const plusCount = ()=> {
    setCount(count + 1);
  };
  

  return (
    <UserContext.Provider
      value={{
        userAccountDatas,
        count,
        userData,
        setUserData,
        plusCount,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
