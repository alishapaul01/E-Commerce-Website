
import { Button } from "react-bootstrap";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const cartElements = [

    {
    id:'p1',
    title: 'Colors',
    price: 100,
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt='Album1'></img>,
    quantity: 2,
    },
    
    {
    id: 'p2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png'alt='album2'></img>,
    quantity: 3,
    },
    
    {
    id: 'p3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png' alt='album3'></img>,
    quantity: 1,
    }
    
    ]
    const Cart=(props)=>{
        const cartItems = (
            <ul className={classes.card}>
            {cartElements.map((item) => (
                <li id={item.id} key={Math.random()} className={classes.content} >
                    
                    <div className={classes.image} 
                    style={{borderRadius:'14px', border:'1px solid pink', marginBottom: '2rem' ,marginTop:'2rem'}}>
                        {item.imageUrl}</div>
                    
                    <span className={classes.price}>Rs{item.price}</span>
                    <span className={classes.quantity}>{item.quantity}<Button
                        variant='danger' size='sm'
                        style={{ marginBottom: '3px' }}>Remove</Button></span>
                
                    
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
            <div className={classes.headings}> 
                <span>ITEM</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
                </div>
           {cartItems}
			
            <div className={classes.total}>
				<span>Total Amount</span>
                <span>  0</span>
	
			</div>
			<div className={classes.actions}>
				<Button>Purchase</Button>
			</div>
		</Modal>
        )

    }
    
    export default Cart;
    