import React, {Suspense, lazy, useContext, useState} from "react";
import Header from "./Components/Layout/Header";
//import Cart from './Components/Cart/Cart';
import AboutPage from './Pages/About/AboutPage';
import {Route, Switch , Redirect} from "react-router-dom";
import StorePage from './Pages/StorePage/StorePage'
import HomePage from "./Pages/Home/HomePage";
//import ContactUs from './Pages/Contact/ContactUs'
//import ProductDetail from "./Components/Products/ProductDetails";
import Login from "./Pages/Login/Login";
import CartContext from "./Store/cart-context";

const Cart= lazy(()=>import('./Components/Cart/Cart'));
const ContactUs= lazy(()=> import('./Pages/Contact/ContactUs'));
const ProductDetail= lazy(()=> import('./Components/Products/ProductDetails'));

const App=()=>{ 
    const[cartIsShown, setCartIsShown]= useState(false);
    const authCtx= useContext(CartContext);
    console.log(authCtx.isLoggedIn);

    const showCartHandler= ()=>{
    setCartIsShown(true);
    }
    const hideCartHandler=()=>{
    setCartIsShown(false);
    }
    return <>
      <Header onShowCart= {showCartHandler}/>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home'/>
          </Route>
          {cartIsShown && <Suspense fallback={<p>Loading...</p>}><Cart onClose={hideCartHandler}/></Suspense>}
          <Route path='/store' exact>
          {authCtx.isLoggedIn && <StorePage />}
          {!authCtx.isLoggedIn && <Redirect to='/auth'/>}
        </Route>
          <Route path='/about'>
            <AboutPage/> 
          </Route>
          <Route path='/home'>
            <HomePage/>
          </Route>
          <Route path='/contact'>
          <Suspense fallback={<p>Loading...</p>}><ContactUs/></Suspense>
          </Route>
          <Route path='/store/:productId' >
          <Suspense fallback={<p>Loading...</p>}> <ProductDetail /></Suspense>
          </Route>
          <Route path='/auth'>
            <Login/>
          </Route>
        </Switch>
      <div>

      </div>
       
      </>

}

export default App;