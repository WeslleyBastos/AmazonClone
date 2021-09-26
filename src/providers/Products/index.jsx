import { useContext, createContext, useState, useEffect } from "react"

import { api } from "../../services"
import { useCart } from "../CartProvider";


const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

    const [initialProducts, setInitialProducts] = useState([])
    

    const { cart, setCart } = useCart();

    useEffect(() => {
        api.get('/products')
        .then(res => setInitialProducts(res.data.slice(0, 4)))
        .catch(err => console.log(err))
    }, [])


    const handleAddToCart = (item) => {
            setCart([...cart, item])
            localStorage.setItem("cart", JSON.stringify(cart))
    }


    return (
        <ProductsContext.Provider value={{initialProducts, handleAddToCart}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)