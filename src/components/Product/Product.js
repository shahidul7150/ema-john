import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product);
    const {name,img,price,seller,ratings}=props.product
    return (
        <div>
            <img src={img} alt="" />
            <div className='card-text' >
                <div>
                <p className='product-name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                </div>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
        </div>
    );
};

export default Product;