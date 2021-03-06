import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product,handleAddToCart}) => {
    // console.log(props);

    const { name, img, price, seller, ratings } =product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info' >
                <div>
                <p className='product-name'>{name.slice(0,18)}....</p>
                <p className='price'>Prices: ${price}</p>
                </div>
                <div className='text-gap'>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings} Stars</p>
                </div>
                <button onClick={()=>handleAddToCart(product)} className="btn-cart" > <p className='btn-text'> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</p></button>
            </div>
        </div>
    );
};

export default Product;