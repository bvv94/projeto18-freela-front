import { createContext, useState } from "react"

export const UserContext = createContext() //UserContext

export default function UserProvider({ children }) {//UserProvider
    const [token, setToken] = useState("")
    const [cpf, setCpf] = useState("")
    // const [UserData, setUserData] = useState([])
    // const [id, setId] = useState(0)

    return (
        // UserContext
        <UserContext.Provider value={{ token, setToken, cpf, setCpf }}>
            {children}
        </UserContext.Provider>
    )
}