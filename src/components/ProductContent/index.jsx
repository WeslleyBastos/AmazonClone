// STYLES

import {MainContainer,
        ImgContainer,
        ProdContainer,
        InfoContainer,
        OrderContainer} from "./styles"

// IMAGENS 

import { useState, useEffect } from "react"
import { api } from "../../services"

import secure from "../../assets/secure.png"
import returns from "../../assets/returns.png"
import amazonDelivered from "../../assets/amazonDelivered.png"
import rating from "../../assets/rating-image.png"
import {Divider} from "antd"
import { useParams } from "react-router";
import { useProducts } from "../../providers/Products"
import MenuNav from "../Menu"

const ProductContent = () => {

    const [productEspecific, setProductEspecific] = useState([])

    const { id } = useParams();
    const { handleAddToCart } = useProducts();

    useEffect(() => {
        api.get(`/products/${id}`)
        .then(res => setProductEspecific([res.data]))
        .catch(err => console.log(err))
    }, [])

    return (
    <MainContainer>
        <div className="nav"> 
         <MenuNav />
        </div>

        {productEspecific.map((prodss, index) => (
            <ProdContainer key={index}>
            <ImgContainer>
                <img className="main-img"src={prodss.img_url} alt="product/id" />
            </ImgContainer>
            <InfoContainer>
                <h2>{prodss.title.slice(0, 35) + "..."}</h2>
                <p className="brand"> Marca: Amazon</p>
                <div className="rating">
                <img src={rating} alt="rating" />
                (55) </div>
                <div className="indica"> <p className="first">Amazon <span>indica</span></p></div>
                <div className="price">
                    <p> De: R$ {prodss.original_price}</p>
                    <p className="descount">Por:<span> R$ {prodss.price} </span> (à vista 5% off)</p>
                    <p className="installment"> ou 10x sem juros de R$21,90 SEM JUROS</p>
                </div>
                <div className="d-icons">
                    <img src={secure} alt="secure-icon" /> <p> Transação Segura </p>
                    <img src={returns} alt="returns-icon"/> <p> Enviado pela Amazon </p>
                    <img src={amazonDelivered} alt="amazonDelivered-icon"/> <p> Política de Segura </p>
                </div>
                <Divider/>
                <div className="prod-color"> Cor: {prodss.color}</div>

                <div className="description">
                    <p>
                        {prodss.desciption}
                    </p>
                </div>
            </InfoContainer>
            <OrderContainer>
                <p className="order-price"> R$ {prodss.price} à vista</p>
                <p className="order-installment"> Ou em até 12x de {prodss.installment}</p>

                <div className="frete"><span>Entrega elegivel com frete</span> <p>GRATIS!</p></div>
                <span className="stock"> Em estoque</span>
                <span className="quantity">Quantidade: 1</span>

                  <button  className="addToCart" onClick={() => handleAddToCart(prodss)}> Adicionar ao Carrinho</button>
                
                <button className="addToFavorites"> Lista de desejos</button>
            </OrderContainer>
        </ProdContainer>
            ))}
    </MainContainer>

    )
}

export default ProductContent