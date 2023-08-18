import React, {useState} from "react";
import Header from "./Components/Layout/Header";
import Cart from './Components/Cart/Cart';
import CartProvider from "./Store/CartProvider";
import AboutPage from './Pages/About/AboutPage';
import {Route, Switch , Redirect} from "react-router-dom"
import StorePage from "./Pages/StorePage/StorePage";
import HomePage from "./Pages/Home/HomePage";
import ContactUs from './Pages/Contact/ContactUs'
import ProductDetail from "./Components/Products/ProductDetails";
import Login from "./Pages/Login/Login";

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
        <Switch>
          <Route path='/' exact>
            <Redirect to='/store'/>
          </Route>
          <Route path='/store' exact>
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
          <Route path="/store/:productId" >
            <ProductDetail />
          </Route>
          <Route path="/auth" >
          <Login/>
        </Route>
        </Switch>
      <div>
      </div>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
      </CartProvider>

}

export default App;