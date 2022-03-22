import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    
    const eventhandler = () => {
        console.log("paise");
    }
    return (
        <div className='shop' >
            <div className='products'>
            {
                products.map(product=><Product key={product.id} product={product} eventhandler={eventhandler} ></Product>)
            }
            </div>
            <div>
                <h1>Cart Site</h1>
          </div>
            
        </div>
    );
};

export default Shop;