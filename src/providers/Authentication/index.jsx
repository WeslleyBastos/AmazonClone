import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../../services";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false)
    const [token] = useState(JSON.parse(localStorage.getItem("@token/auth")) || "")
    const [userName, setUserName] = useState("");
    const userId = JSON.parse(localStorage.getItem("@token/userId"));

    useEffect(() => {

        if(token) {
            setAuthenticated(true)
            
            api.get(`/users/${userId}/`)
            .then((res) => {
                setUserName(res.data.username);
            })
            .catch((err) => console.log(err));              
        }

    }, [authenticated, token])

    return (
        <AuthenticationContext.Provider value={{authenticated, setAuthenticated, userId, userName}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuthentication = () => useContext(AuthenticationContext)