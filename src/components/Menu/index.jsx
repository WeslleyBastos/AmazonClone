// COMPONENTES
import SearchBar from "../SearchBar"
import { Badge } from 'antd';
import MenuBurguer from "./MenuBurguer";
import Burger from "./Burger";

// STYLES
import { SearchBox,
         MenuBox,
         } from "./styles"

// IMAGE
import amazonLogoWhite from "../../assets/amazonLogoWhite.png"

// ICONS
import {RiShoppingCartLine} from "react-icons/ri"

// CODE
import { useState, useRef } from "react";
import { useOnClickOutside } from './hooks';

const MenuNav = () => {

    const [open, setOpen] = useState(false);
    const node = useRef(); 
    
    useOnClickOutside(node, () => setOpen(false));

    return(
        <div>
            <SearchBox>
            <img src={amazonLogoWhite} alt="logo" />
            <SearchBar/>
            <div className="setUser">
                <p className="user">Hello, User</p>
                <h3 className="account">Account and Lists</h3>
            </div>
            <RiShoppingCartLine className="cart"/>
            <Badge size="default" count={5}/>
            </SearchBox>
        
            <MenuBox ref={node}>
                <Burger open={open} setOpen={setOpen}/>
                <MenuBurguer open={open} setOpen={setOpen}/>
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