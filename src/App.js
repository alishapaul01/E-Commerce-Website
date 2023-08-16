import React, {useState} from "react";
import Header from "./Components/Layout/Header";
import Cart from './Components/Cart/Cart';
import CartProvider from "./Store/CartProvider";
import AboutPage from './Pages/About/AboutPage';
import {Route} from "react-router-dom"
import StorePage from "./Pages/StorePage/StorePage";
import HomePage from "./Pages/Home/HomePage";
import ContactUs from './Pages/Contact/ContactUs'

const App=()=>{ 
    const[cartIsShown, setCartIsShown]= useState(false);
    
    const showCartHandler= ()=>{
    setCartIsShown(true);
    }
    const hideCartHandler=()=>{
    setCartIsShown(false);
    }
    return <CartProvider>
        
    
        <Header onShowCart= {showCartHandler}/>
        
          <Route path='/store'>
            <StorePage/>
          </Route>
          <Route path='/about'>
            <AboutPage/> 
          </Route>
          <Route path='/home'>
            <HomePage/>
          </Route>
          <Route path='/contact'>
            <ContactUs/>
          </Route>
        
    
      <div>
      </div>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
       
        </CartProvider>

}

export default App;