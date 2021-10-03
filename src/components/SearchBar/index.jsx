// STYLES
import {InputStyle, 
        SearchBox} from "./styles"

// ICONS
import {BsSearch} from "react-icons/bs"

//ENGINE
import { useHistory, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import {useProducts} from "../../providers/Products"
import { api } from "../../services"


const SearchBar = () => {
    const {initialProducts} = useProducts();
    const [filtred, setFiltred] = useState("");
    const [produtoFiltrado, setProdutoFiltrado] = useState([]);
    const { title } = useParams();

    const filteredProducts = initialProducts.filter(({ title }) =>
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        filtred
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          )
          );
    const history = useHistory();
          
    const Pesquisar = () => {
    if (filtred !== "" && filteredProducts.length !== 0) {
    history.push(`/products/${filtred}`, filtred);
        setProdutoFiltrado(filteredProducts)
    } else if (filteredProducts.length === 0) {
      history.push(`/not-found`, filtred);
    }
  };


    return(
        <SearchBox>
            <InputStyle
            value={filtred}
            onChange={(event) => setFiltred(event.target.value)}
            placeholder="Produtos e Serviços Amazon"
            >
            </InputStyle>
            <div className="click-to-search" type="submit" onClick={() => Pesquisar()}>
            <BsSearch/>
            </div>
            {produtoFiltrado.map((prod)=> <li>{prod.title}</li>)}           
        </SearchBox>
    )
}
export default SearchBar