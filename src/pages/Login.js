import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../datas/User/UserContextAPI";


const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled.input`
  width: 50%;
  padding: 2rem;

  & + & {
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  margin-top: 2rem;
`;

const Login = () => {
    const { userAccountDatas, setUserData } = useContext(UserContext)

  const [input, setInput] = useState({
    id: "",
    pw: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    setUserData(userAccountDatas.filter(userData => {
      if (userData.id === input.id) {
        return userData.pw === input.pw;
      }
    }));
  };


  return (
    <Container>
      <LoginInput
        name="id"
        onChange={onChange}
        value={input.id}
        placeholder="input your id"
      />
      <LoginInput
        name="pw"
        onChange={onChange}
        value={input.pw}
        placeholder="input your pw"
      />

      <Button onClick={handleLogin}>로그인!</Button>
    </Container>
  );
};

export default Login;
