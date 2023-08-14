
import { Container, Navbar} from "react-bootstrap";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    

    return (
        <>
        <header>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                <ul className={classes.header}>
                    <li className={classes.li}>
                        <NavLink to='/home' className={({isActive})=> isActive? classes.active : undefined}>HOME</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink to='/store' className={({isActive})=> isActive? classes.active : undefined} end>STORE</NavLink>
                    </li>
                    <li className={classes.li}>
                        <NavLink to='/about' className={({isActive})=> isActive? classes.active : undefined}>ABOUT</NavLink>
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
                fontFamily: 'times new roman'
                }}>The Generics</h1>
            </header>
        </>
    )
}

export default Header;