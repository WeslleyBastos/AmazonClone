import axios from "axios";
import { useContext, createContext, useState } from "react"

const CepContext = createContext();

export const CepProvider = ({ children }) => {

    const [cepNumber, setCepNumber] = useState("")
    const [numberHouse, setNumberHouse] = useState("")
    const [complement, setComplement] = useState("")
    const [cpf, setCpf] = useState("")
    const [telephone, setTelephone] = useState("")
    const [error, setError] = useState(false)
    const [ceps, setCeps] = useState({})
    const [dados, setDados] = useState({})

    const handleSearchCep = () => {
        const dados = { numberHouse: numberHouse}
        axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`)
        .then(res => {setCeps(res.data); setError(false)})
        .catch(_ => setError(true))    
    }

    return (
        <CepContext.Provider value={{cepNumber, setCepNumber, error, setError, ceps, setCeps, handleSearchCep, numberHouse, setNumberHouse, complement, setComplement, cpf, setCpf, telephone, setTelephone, dados, setDados}}>
            {children}
        </CepContext.Provider>
    )
}

export const useCep = () => useContext(CepContext)