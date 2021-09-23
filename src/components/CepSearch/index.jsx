import { useCep } from "../../providers/CepProvider"
import { ContainerParent, ContainerSearch } from "./styles";

export const CepSearch = () => {

    const { cepNumber, setCepNumber, ceps, handleSearchCep, numberHouse, setNumberHouse, complement, setComplement, cpf, setCpf, telephone, setTelephone, dados, setDados } = useCep();

    const handleAddAddress = () => {
        alert(cepNumber)
            // api.patch(`/user/${id}/`, {...ceps})
            // .then(res => setDados({...dados, ceps}))        
    }

    return (
        <ContainerParent>
        <div className="info-address">
            <h2>Nome: </h2>
            <h2>E-mail: </h2>
            <h2>Telefone: </h2>
            <h2>Cep: {ceps.cep}</h2>
            <h2>Logradouro: {ceps.logradouro}</h2>
            <h2>Bairro: {ceps.bairro}</h2>
            <h2>Cidade: {ceps.localidade}</h2>
            <h2>Estado:{ceps.uf}</h2>
        </div>
            <h1>Endereço e informações pessoais</h1>
        <ContainerSearch>
            <div className="container-search">
                <input maxLength="8" placeholder="Procure seu cep" onChange={evt => setCepNumber(evt.target.value)} /> 
               <button disabled={!cepNumber} onClick={() => handleSearchCep(cepNumber)}>Procurar</button>
            </div>

        <div className="address">
            <label>Cep: </label>
            <input type="text" value={ceps.cep} />

            <label>Lograduro:</label>
            <input type="text" placeholder={ceps.logradouro === "" ? "Logradouro não encontrado" : ceps.logradouro} value={ceps.logradouro} />

            <label>Bairro:</label>
            <input type="text" placeholder={ceps.bairro === "" ? "Bairro não encontrado" : ceps.bairro} value={ceps.bairro} />

            <label>Localidade:</label>
            <input type="text" value={ceps.localidade} />

            <label>Estado:</label>
            <input type="text" value={ceps.uf} />
        </div>

        <div className="btn-center">
            <button className="btn-use" onClick={handleAddAddress}>Usar endereço</button>
        </div>

        </ContainerSearch>
        </ContainerParent>

        
    )
}