import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);

    const { name, img, price, seller, ratings } = props.product;
    console.log(props.eventhandler);
    return (
        <div className='item-parent'>
            <img src={img} alt="" />
            <div className='card-text' >
                <div>
                <p className='product-name'>{name.slice(0,18)}....</p>
                <p className='price'>Price: ${price}</p>
                </div>
                <div className='text-gap'>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings} Stars</p>
                </div>
                <button onClick={()=>props.eventhandler()}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;