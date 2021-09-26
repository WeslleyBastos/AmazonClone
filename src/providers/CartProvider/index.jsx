import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const removeItem = (trashItem) => {
        setCart(cart.filter(item => item !== trashItem))
    }

    return (
        <CartContext.Provider value={{cart, setCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)