import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../datas/User/UserContextAPI"
import { getKakaoProfile, initializeKakaoLogin, initializeNaverLogin } from "../API/login";

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
  const navigate = useNavigate();
  const { userAccountDatas, setUserData, userData } = useContext(UserContext);

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
    setUserData(
      userAccountDatas.filter((userData) => {
        if (userData.id === input.id) {
          navigate('/');
          return userData.pw === input.pw;
        }
      })
    );

  };

  useEffect(() => {
    // initializeKakaoLogin();
    initializeNaverLogin();
  }, []);

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
      <Button onClick={() => getKakaoProfile(setUserData)}>카카오로그인!</Button>
      {userData}
      <div id="naverIdLogin"></div>
    </Container>
  );
};

export default Login;
