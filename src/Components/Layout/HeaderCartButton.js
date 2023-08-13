import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
const HeaderCartButton=props=>{
    const cxt = useContext(CartContext);

    let quantity = 0;
    cxt.items.forEach((item) => {
        quantity = quantity + Number(item.quantity);
    })

    return (<button className={classes.button} onClick={props.onClick}>
        <span>Your Cart  </span>
        <span>{ quantity}</span>
    </button>
    )
}
export default HeaderCartButton;