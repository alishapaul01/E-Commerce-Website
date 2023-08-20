import React, { useState, useEffect} from 'react';

import CartContext from "./cart-context";
import axios from 'axios';

const CartProvider = (props) => {
    const [items, updateItems] = useState([]);
    let initialToken = localStorage.getItem('token');
    let initialEmail = localStorage.getItem('email');
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState(initialEmail);
    const userIsLoggedIn = !!token;

    const modifiedEMail=  email.replace('@','').replace('.', '');
    const addItemToCartHandler= async (item) => {
      let itemsCopy = [...items];
      let itemIndex = itemsCopy.findIndex((i) => i.id === item.id);
     
      if (itemIndex === -1) {
        await axios.post(`https://crudcrud.com/api/f4e20b5632324aaf82c891c6235a3134/Cart${modifiedEMail}`, item)
        console.log(item)
       // updateItems([...items,item]);
      } 
      else {
  
        const existingCartItem = items[itemIndex];
            const id = items[itemIndex]._id;
            const updatedCartItem = { ...item, quantity: existingCartItem.quantity + 1 };
           await axios.put(`https://crudcrud.com/api/f4e20b5632324aaf82c891c6235a3134/Cart${modifiedEMail}/${id}`, updatedCartItem)
  
          console.log('inside addItemToCartHandler',cartContext);
      }
      const response = await axios.get(`https://crudcrud.com/api/f4e20b5632324aaf82c891c6235a3134/Cart${modifiedEMail}`)
      const data= await response.data;
      updateItems(data)
    }
    useEffect(() => {
      const email = localStorage.getItem('email');
      const token = localStorage.getItem('token');
      if (email && token) {
          setToken(token);
          setEmail(email);
          axios.get(
              `https://crudcrud.com/api/f4e20b5632324aaf82c891c6235a3134/Cart${modifiedEMail}`
          ).then((res) => {
              updateItems(res.data);
          })
      }
  }, [modifiedEMail, token])
     
    const removeItemFromCartHandler = async (item) => {
      const itemIndex = items.findIndex((i) => i.id === item.id);
      if (itemIndex !== -1){
        const id = items[itemIndex]._id;
         await axios.delete(
          `https://crudcrud.com/api/f4e20b5632324aaf82c891c6235a3134/Cart${modifiedEMail}/${id}`
          )
         }
      const response =await axios.get(
          `https://crudcrud.com/api/f4e20b5632324aaf82c891c6235a3134/Cart${modifiedEMail}`
      )
      const data = response.data;
      updateItems(data);
  }
    let totalPrice = 0;
    items.forEach((item) => {
        totalPrice = totalPrice + Number(item.price * item.quantity);
    });


    const loginHandler = (token, email) => {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        setToken(token);
        setEmail(email);
       
    }

    const cartContext = {
        items: items,
        totalAmount: totalPrice.toFixed(2),
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        token: token,
        email: email,  
        login: loginHandler,
        isLoggedIn: userIsLoggedIn,
    }
    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;