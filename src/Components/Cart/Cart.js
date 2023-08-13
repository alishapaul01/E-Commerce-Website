
import { Button } from "react-bootstrap";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartContext from "../../Store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
    const cxt = useContext(CartContext);
        const cartItems = (
            <ul className={classes.card}>
                {cxt.items.map((item) => (
                    <li id={item.id} className={classes.content} >
                        <div classname={classes.title}>{item.title}</div>
                        <div>{item.imageUrl}</div>
                        <div>Rs {item.price}</div>
                        <div>{item.quantity} </div>
                        <Button
                            variant='danger' size='sm'
                            style={{ marginBottom: '3px' }}
                            onClick={() => cxt.removeItem(item)}>Remove</Button>
                    </li>
                ))}
            </ul>
        )
        return (
        <Modal onClose={props.onClose}>
            <header className={classes.close}>
                <Button bg='danger' variant='danger' onClick={props.onClose}> X</Button>
            </header>
            <h2>CART</h2>
           {cartItems}
			
            <div className={classes.total}>
				<span>Total Amount</span>
                <span>{cxt.totalAmount}</span>
	
			</div>
			<div className={classes.actions}>
				<Button>Purchase</Button>
			</div>
		</Modal>
        )

    }
    
    export default Cart;
    