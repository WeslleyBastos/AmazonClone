import { useCart } from "../../providers/CartProvider"
import { Total } from "./styles"
import check from "../../assets/check.png"

export const TotalPrice = () => {

    const { cart } = useCart();

    const total = cart.reduce((acc, tot) => tot.price + acc, 0)

    return (
        <Total>
            <div className="sub-frete">

                <div className="verificado-text">
                    <img src={check} alt="verificado" />

                    <span className="span-parent"><span>Seu pedido se qualifica para frete gratis!</span> Selecione FRETE GRATIS ao finalizar a sua compra</span>
                </div>

                <h2>Subtotal (1 item): <span className="bold-span">R$ {total}</span></h2>

                <div className="input-span">
                    <input type="checkbox" /><span>Este item é um presente?</span>
                </div>

                <div className="btn">
                    <button>Fechar pedido</button>
                </div>
            </div>
        </Total>

    )
}