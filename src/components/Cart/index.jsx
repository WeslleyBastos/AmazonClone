import { ContainerCart, ContainerItemsCart } from "./styles"
import  MenuNav  from "../Menu"
import alexa from "../../assets/alexa.png"
import rectangle from "../../assets/Rectangle84.png"
import check from "../../assets/check.png"
import { Footer } from "../Footer"

export const Cart = () => {
    return (
        <ContainerItemsCart>
            <div className="teste">
                <Footer style={{marginTop: "15rem"}}/>
            </div>
        <MenuNav />
        <ContainerCart>
            {/* <h1>Carrinho de compras</h1> */}
            <div className="container-items">
            <div className="cart-buy">
                <h1>Carrinho de compras</h1>
            </div>
            <hr className="hr-separator-two" />
            
                <img src={alexa} alt="alexa" />
                <h1>Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta</h1>
                <h1>R$ 208,05</h1>

                <div className="info-prod">
                    <img src={rectangle} alt="amazon" />
                    <p>a vista ou em até 10x de<br /> 21,90 sem juros</p>
                </div>

                <div className="h3">
                    <h3>Cor: Preta</h3>

                <div className="container-controll">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
                </div>

                <hr className="hr-separator" />

                <h1 className="subtotal">Subtotal (1item): <span>R$ 208,05</span></h1>
            </div>

            <div className="sub-frete">

                <div className="verificado-text">
                    <img src={check} alt="verificado" />

                    <span className="span-parent"><span>Seu pedido se qualifica para frete gratis!</span> Selecione FRETE GRATIS ao finalizar a sua compra</span>
                </div>

                <h2>Subtotal (1 item): <span className="bold-span">R$ 208,05</span></h2>

                <div className="input-span">
                <input type="checkbox" /><span>Este item é um presente?</span>
                </div>

                <div className="btn">
                    <button>Fechar pedido</button>
                </div>
            </div>
        </ContainerCart>
        </ContainerItemsCart>
    )
}