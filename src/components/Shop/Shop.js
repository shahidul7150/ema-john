import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div className='shop' >
            <div className='products'>
            {
                products.map(product=><Product product={product}></Product>)
            }
            <h1>Shop {products.length}</h1>
            </div>
            <div>
                <h1>Cart Site</h1>
          </div>
            
        </div>
    );
};

export default Shop;