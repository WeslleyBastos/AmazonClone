// STYLES

import {MainContainer,
        ImgContainer,
        ProdContainer,
        InfoContainer,
        OrderContainer} from "./styles"

// IMAGENS 

import alexa from "../../assets/alexa.png"
import secure from "../../assets/secure.png"
import returns from "../../assets/returns.png"
import amazonDelivered from "../../assets/amazonDelivered.png"

import {AiFillStar} from "react-icons/ai"
import {Divider} from "antd"

const ProductContent = () => {
    return (
    <MainContainer>
        <div className="nav">
          
        </div>
        <ProdContainer>
            <ImgContainer>
                <img className="main-img"src={alexa} alt="product/id" />
            </ImgContainer>
            <InfoContainer>
                <h2>Echo Dot (3ª Geração): SmartSpeaker com Alexa - Cor Preta </h2>
                <p className="brand"> Marca: Amazon</p>
                <div className="rating"> < AiFillStar color="var(--yellow)"/> < AiFillStar color="var(--yellow)"/> < AiFillStar color="var(--yellow)"/> < AiFillStar color="var(--yellow)"/> < AiFillStar/> (55) </div>
                <div className="indica"> <p className="first">Amazon <span>indica</span></p></div>
                <div className="price">
                    <p> De: R$ 349,00</p>
                    <p className="descount">Por:<span> R$ 208,05 </span> (à vista 5% off)</p>
                    <p className="installment"> ou 219,00 em até 10x sem juros de R$21,90 SEM JUROS</p>
                </div>
                <div className="d-icons">
                    <img src={secure} alt="secure-icon" /> <p> Transação Segura </p>
                    <img src={returns} alt="returns-icon"/> <p> Enviado pela Amazon </p>
                    <img src={amazonDelivered} alt="amazonDelivered-icon"/> <p> Política de Segura </p>
                </div>
                <Divider/>
                <div className="prod-color"> Cor: Preto</div>

                <div className="description">
                    <p>
                        O Echo Dot é o nosso smart speaker de maior sucesso.
                        Controlando por voz com Alexa, ele é perfeito para qualquer ambiente.
                        Você pode pedir músicas, notícias, informações e muito mais.
                        Além de ligar para amigos e familiares e controlar disṕsitivos de casa
                        inteligente com voz.
                    </p>
                </div>
            </InfoContainer>
            <OrderContainer>
                <p className="order-price"> R$ 208,05 à vista</p>
                <p className="order-installment"> Ou em até 12x de 29,12</p>

                <div className="frete"><span>Entrega elegivel com frete</span> <p>GRATIS!</p></div>
                <span className="stock"> Em Estoque</span>
                <span className="quantity">Quantidade: 1</span>

                <button className="addToCart"> Adicionar ao Carrinho</button>
                <button className="addToFavorites"> Lista de desejos</button>
            </OrderContainer>
        </ProdContainer>
    </MainContainer>

    )
}

export default ProductContent