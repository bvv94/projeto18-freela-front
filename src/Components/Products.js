import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { UserContext } from "../Context/UserContext.js";


export default function Products() {

    const { token } = useContext(UserContext)
    const [products, setProducts] = useState([])

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.error(err.response.data.message)
            })
    }, []);

    return (
        <>
            <Subs>
                <H1>Desapego Eletrônicos</H1>

                {products.map((p => (
                    <LinkStyled key={p.id} to={`/subscriptions/${p.id}`}>
                        <ButtonPlan>
                            <img src={p.image} alt={"produto"}/>
                            <p>{p.price}</p>
                        </ButtonPlan>
                    </LinkStyled>
                )))}
            </Subs>
        </>
    )
}

const ButtonPlan = styled.button`
    width: 290px;
    height: 180px;
    background-color: #0E0E13;
    border-radius: 12px;
    border: 3px solid #7E7E7E;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'roboto';
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
`
const H1 = styled.h1`
    font-family: 'roboto';
    font-size: 32px;
    font-weight:700;
    margin-bottom: 24px;
    margin-top: 29px;
`

const Subs = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`
const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: row;
    display: flex;
    align-items: center;
    color: white;
`