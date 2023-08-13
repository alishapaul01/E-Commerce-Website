import React, {useState} from "react";


import Header from "./Components/Layout/Header";
import AvailableProducts from "./Components/Products/AvailableProducts";
import Cart from './Components/Cart/Cart';
import CartProvider from "./Store/CartProvider";

const App=()=>{ 
    const[cartIsShown, setCartIsShown]= useState(false);
    
    const showCartHandler= ()=>{
    setCartIsShown(true);
    }
    const hideCartHandler=()=>{
    setCartIsShown(false);
    }
    return <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart= {showCartHandler}/>
        <AvailableProducts/>
        </CartProvider>

}

export default App;