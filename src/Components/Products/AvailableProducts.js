import classes from './AvailableProduct.module.css'
import Products from './Product'

export const productsArr = [

    {
    id: 'p1',

    title: 'Colors',
    
    price: 100,
    
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png'alt='album 1'></img>,
    
    },
    
    {
    id: 'p2',
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png' alt='album2'></img>,
    
    },
    
    {
    id: 'p3',
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png' alt='album 3'></img>,
    
    },
    
    {
    id: 'p4',
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%204.png' alt='album 4'></img>,
    
    }
    
    ]
const AvailableProducts = () => {
    const products = productsArr.map((product) => (
        <Products
            key={Math.random()}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
            
        />
    ))
    return (
        <section className={classes.section}>
            <h2>Music</h2>
            <ul className={classes.list}>
                {products}
            </ul>
        </section>
    )
}

export default AvailableProducts;