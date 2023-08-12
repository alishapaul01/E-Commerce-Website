
import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './AvailableProduct.module.css';


const Products = (props) => {
    
    
    return (
        <li className={classes.product} id={props.id} >

                <h2>{props.title}</h2>
                <div className={classes['main-image']}>
                {props.imageUrl}
                </div>
                <p><b>Rs {props.price}</b></p>
                <Button>Add To Cart</Button>

        </li>
    )
}

export default Products;