import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoginInput = styled.input`
    width: 50%;
    padding: 2rem;

    & + & {
        margin-top: 1rem;
    }
`

const Button = styled.button`
    width: 10rem;
    height: 3rem;
    margin-top: 2rem;
`

const Login = () => {

    const [ input, setInput ] = useState({
        id: '',
        pw: '',
    })

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    return (
        <Container>
            <LoginInput name="id" onChange={onChange} value={input.id} placeholder="input your id" />
            <LoginInput name="pw" onChange={onChange} value={input.pw} placeholder="input your pw" />

            <Button>로그인!</Button>
        </Container>
    )
}

export default Login;