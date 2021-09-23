import { createContext, useContext, useEffect, useState } from "react"

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@token/auth"))

        if(token) {
            return setAuthenticated(true)
        }

    }, [authenticated])

    return (
        <AuthenticationContext.Provider value={{authenticated, setAuthenticated}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuthentication = () => useContext(AuthenticationContext)