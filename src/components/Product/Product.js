import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props);

    const { name, img, price, seller, ratings } = props.product;
    
    return (
        <div className='item-parent'>
            <img src={img} alt="" />
            <div className='card-text' >
                <div>
                <p className='product-name'>{name.slice(0,18)}....</p>
                <p className='price'>Prices: ${price}</p>
                </div>
                <div className='text-gap'>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings} Stars</p>
                </div>
                <button onClick={()=>props.handleAddToCart(props.product)} > <p>Add to cart</p> </button>
            </div>
        </div>
    );
};

export default Product;