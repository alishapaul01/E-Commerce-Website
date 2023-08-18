import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
})

export default CartContext;