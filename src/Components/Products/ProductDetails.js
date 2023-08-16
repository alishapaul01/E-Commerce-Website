import { useParams } from 'react-router-dom';
import { productsArr } from './AvailableProducts';
import classes from './ProductDetails.module.css';

const ProductDetail = () => {
    const params = useParams();

    const product = productsArr.map((i) => {
        if (i.id === params.productId) {
            return (
                <div className={classes['product-details']}  >
                    <h3>{i.title}</h3>
                    <h5>{i.description}</h5>
                    <div className={classes['product-image']}>
                        {i.imageUrl}
                    </div>
                    <p><b>Rs {i.price}</b></p>
                    
                </div>
            )
        }
    })
    console.log(params)

    return (
        <section className={classes['product-section']}>
            <h3><u>Product Details</u></h3>
            {product}
        </section>
    )
}

export default ProductDetail;