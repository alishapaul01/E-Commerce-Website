import classes from './AvailableProduct.module.css'
import Products from './Product';
import album1 from'../../Assets/Album 1.png';
import album2 from'../../Assets/Album 2.png';
import album3 from'../../Assets/Album 3.png';
import album4 from'../../Assets/Album 4.png';


export const productsArr = [

    {
    id: 'p1',

    title: 'Album 1',
    
    price: 100,
    
    imageUrl: <img src={album1} alt="Product 1" />,

    description: 'A multicolor picture album which suits your style.'
    
    },
    
    {
    id: 'p2',
    title: 'Album 2',
    
    price: 50,
    
    imageUrl: <img src={album2} alt="Product 2" />,
    description: 'A Black and white monochrome picture.'
    
    },
    
    {
    id: 'p3',
    title: 'Album 3',
    
    price: 70,
    
    imageUrl: <img src={album3} alt="Product 3" />,
    description: 'Yellow lights to lighten up your day.'
    
    
    },
    
    {
    id: 'p4',
    
    title: 'Album 4',
    
    price: 100,
    
    imageUrl: <img src={album4} alt="Product 4" />,
    
    description: 'Blue Hues and Mist.'
    
    }
    
    ]
const AvailableProducts = () => {
    const products = productsArr.map((product) => (
        <Products
            key={Math.random()}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
            items={product}
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