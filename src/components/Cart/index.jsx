import { ContainerCart, ContainerItemsCart } from "./styles"
import  MenuNav  from "../Menu"
import rectangle from "../../assets/Rectangle84.png"
import { Footer } from "../Footer"
import { useCart } from "../../providers/CartProvider"
import { TotalPrice } from "../TotalPrice"

// import MenuNav from "../../components/Menu"


export const Cart = () => {

    const { cart, removeItem } = useCart();

    return (
        <div> 
        <MenuNav />
        <div style={{display: "flex", justifyContent: "space-between", backgroundColor: "lightgray", height: "100vh"}}>
        <ContainerItemsCart>
            {cart.map((car, index) => (
                <main key={index}>
               
        <ContainerCart>
            <div className="container-items">

            <hr className="hr-separator-two" />
            
                <img src={car.img_url} alt="alexa" />
                <h1 style={{position: "relative", left: "-0.5rem"}}>{car.title.slice(0,50) + "..."}</h1>
                <h1>R$ {car.price}</h1>

                <div className="info-prod">
                    <img src={rectangle} alt="amazon" />
                    <p>R${car.price} a vista ou em até 10x de<br /> R${car.installment.toFixed(2)}</p>
                </div>

                <div className="h3">
                    <h3>Cor: {car.color}</h3>

                <div className="container-controll">
                    <button onClick={() => removeItem(car)}>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
                </div>

                <hr className="hr-separator" />

                <h1 style={{position: "relative", left: "-1.5rem"}}className="subtotal">Subtotal (1item): <span>R$ {car.price}</span></h1>
            </div>
        </ContainerCart>
        </main>
            ))}
        </ContainerItemsCart>
            <TotalPrice />
            </div>
                <Footer />
        </div>
        )
    }