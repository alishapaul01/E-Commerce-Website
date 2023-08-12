
import { Container, Navbar } from "react-bootstrap";
import classes from './Header.module.css';
import Nav from 'react-bootstrap/Nav';
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    

    return (
        <>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                <ul className={classes.header}>
                    <li className={classes.li}>
                        <Nav.Link>HOME</Nav.Link>
                    </li>
                    <li className={classes.li}>
                        <Nav.Link>STORE</Nav.Link>
                    </li>
                    <li className={classes.li}>
                        <Nav.Link>ABOUT</Nav.Link>
                    </li>
                </ul>
                <HeaderCartButton onClick={props.onShowCart} />
                </Container>
            </Navbar>
            <h1>The Generics</h1>
        </>
    )
}

export default Header;