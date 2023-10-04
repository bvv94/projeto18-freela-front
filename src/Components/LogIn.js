import styled from "styled-components"
import InputStyled from "../Style/StyledInput"
import ButtonStyled from "../Style/StyledButton"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../Context/UserContext.js';
import axios from "axios";
import { useContext } from "react"

export default function LogIn() {

    const [password, setPassword] = useState("")
    const { cpf, setCpf, token, setToken } = useContext(UserContext)
    const navigate = useNavigate();

    function login(e) {

        const body = { cpf, password }
        e.preventDefault();
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", body)


        promise.then((res) => {
            setToken(res.data.token)
            setCpf(res.data.cpf)
        })
        promise.catch((err) => {
            alert(err.response.data.message)
        })
    }

    return (
        <>
            <Form onSubmit={login}>
                <InputStyled name="cpf" type="cpf" placeholder="CPF" required
                    value={cpf} onChange={e => setCpf(e.target.value)} />
                <InputStyled name="password" type="password" placeholder="Senha" required
                    value={password} onChange={e => setPassword(e.target.value)} />
                <ButtonStyled type="submit" to="/produtos">ENTRAR</ButtonStyled>
                <Tosignin to="/cadastro">Não possui uma conta? Cadastre-se</Tosignin>
            </Form>
        </>)
}

const Form = styled.form`
    margin-top: 147px;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`
const Tosignin = styled(Link)`
    font-family: "roboto";
    font-size: 14px;
    font-weight: 400;
    color: white;
`