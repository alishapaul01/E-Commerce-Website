import React, {useState} from "react";


import Header from "./Components/Layout/Header";

import Cart from './Components/Cart/Cart';
import CartProvider from "./Store/CartProvider";
import AboutPage from './Pages/About/AboutPage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import StorePage from "./Pages/StorePage/StorePage";
import HomePage from "./Pages/Home/HomePage";

const App=()=>{ 
    const[cartIsShown, setCartIsShown]= useState(false);
    
    const showCartHandler= ()=>{
    setCartIsShown(true);
    }
    const hideCartHandler=()=>{
    setCartIsShown(false);
    }
    return <CartProvider>
        
      <Router>
        <Header onShowCart= {showCartHandler}/>
        <Routes>
          <Route path='/store' element={<StorePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>
        </Routes>
      </Router>
      <div>
      </div>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
       
        </CartProvider>

}

export default App;