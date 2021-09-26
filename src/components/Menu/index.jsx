// COMPONENTES
import SearchBar from "../SearchBar"
import { Badge } from 'antd';
import MenuBurguer from "./MenuBurguer";
import Burger from "./Burger";
import { SearchBox,MenuBox} from "./styles"
import amazonLogoWhite from "../../assets/amazonLogoWhite.png"
import {RiShoppingCartLine} from "react-icons/ri"
import { useState, useRef } from "react";
import { useOnClickOutside } from './hooks';
import { useHistory } from "react-router";
import { useAuthentication } from '../../providers/Authentication';
import { useCart } from "../../providers/CartProvider";

const MenuNav = () => {

    const [open, setOpen] = useState(false);
    const { userName } = useAuthentication();
    const { cart } = useCart();
    const node = useRef(); 
    const history = useHistory();
    
    useOnClickOutside(node, () => setOpen(false));

    const hour = new Date().getHours();
    
    return(
        <div>
            <SearchBox>
            <img src={amazonLogoWhite} alt="logo" onClick={() => {history.push("/"); history.go(0)}} title="Início" style={{cursor: "pointer"}}/>
            <SearchBar/>
            <div className="setUser">
                <p className="user">
                    {hour > 18
                        ? "Boa noite, "
                        : hour > 12
                        ? "Boa tarde, "
                        : hour > 6
                        ? "Bom dia, "
                        : "Boa noite, "}
                        {userName}
                    </p>
                <h3 className="account">Account and Lists</h3>
            </div>
            <RiShoppingCartLine className="cart" onClick={() => history.push("/cart")} title="Carrinho" style={{cursor: "pointer"}}/>
            <Badge size="default" count={cart.length}/>
            </SearchBox>
        
            <MenuBox ref={node} >
                <Burger open={open} setOpen={setOpen} />
                <MenuBurguer open={open} setOpen={setOpen} />
                <p>All</p>
                <span>Today’s Deals</span>
                <span>Costumer Service</span>
                <span>Buy Again</span>
                <span>User’s wishlist</span>
                <span>Gift Card</span>
                <span>Registry</span>
                <span>Sell</span>
                <span>Amazon’s response to COVID-19</span>          
            </MenuBox>

       
        </div>
    )
}
export default MenuNav