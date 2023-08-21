
import { Container, Navbar} from "react-bootstrap";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    

    return (
        <>
        <header>
        <Navbar bg="dark" expand="sm" variant="dark" className={classes.navbar}>
                <Container>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <NavLink to='/home' activeClassName={classes.active}>HOME</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink to='/store' activeClassName={classes.active} end='true'>STORE</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink to='/about' activeClassName={classes.active}>ABOUT</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink to='/contact' activeClassName={classes.active}>CONTACT US</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink to='/auth' activeClassName={classes.active}>LOGIN</NavLink>
                    </li>
                </ul>
                <HeaderCartButton onClick={props.onShowCart} />
                </Container>
            </Navbar>
            <h1 
             style={{
                backgroundColor: 'grey', 
                fontSize:'100px', 
                color:'white', 
                textAlign:'center',
                fontFamily: 'times new roman'}}>The Generics</h1>
            </header>
        </>
    )
}

export default Header;