
import React ,{useContext}from 'react';
import { Button } from 'react-bootstrap';
import classes from './AvailableProduct.module.css';
import CartContext from '../../Store/cart-context';
import {Link} from 'react-router-dom'


const Products = (props) => {

    const cartCntx=useContext(CartContext);

    const addItemToCart=(event)=>{
        event.preventDefault();
        cartCntx.addItem({...props, quantity:1})
    }
    
    
    return (
        <li className={classes.product} id={props.id} >

                <h2>{props.title}</h2>
                <div className={classes['main-image']}>
                <Link to={`/store/${props.id}`}>{props.imageUrl}</Link>
                </div>
                <p><b>Rs {props.price}</b></p>
                <Button onClick={addItemToCart}>Add To Cart</Button>

        </li>
    )
}

export default Products;