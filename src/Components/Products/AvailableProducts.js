import classes from './AvailableProduct.module.css'
import Products from './Product'

export const productsArr = [

    {
    id: 'p1',

    title: 'Album 1',
    
    price: 100,
    
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png'alt='album 1'></img>,

    description: 'A multicolor picture album which suits your style.'
    
    },
    
    {
    id: 'p2',
    title: 'Album 2',
    
    price: 50,
    
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png' alt='album2'></img>,

    description: 'A Black and white monochrome picture.'
    
    },
    
    {
    id: 'p3',
    title: 'Album 3',
    
    price: 70,
    
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png' alt='album 3'></img>,

    description: 'Yellow lights to lighten up your day.'
    
    
    },
    
    {
    id: 'p4',
    
    title: 'Album 4',
    
    price: 100,
    
    imageUrl: <img src='https://prasadyash2411.github.io/ecom-website/img/Album%204.png' alt='album 4'></img>,
    
    description: 'Blue Hues and Mist.'
    
    }
    
    ]
const AvailableProducts = () => {
    const products = productsArr.map((product) => (
        <Products
            key={product.id}
            id={product.id}
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