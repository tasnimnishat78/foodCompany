import React from 'react';
import './Product.css';


const Product = (props) => {
    const handleAddToCart = props.handleAddToCart;
    const {img, name, category, price, ratings, seller} = props.product;

    return (
        <div>
            <div className='single-product'>
                <img src={img} alt="" />
                <div className='description'>
                    <h5> {name} </h5>
                    <p>Category: {category} </p>
                    <p>Price: {price} </p>

                    <div className='lower-part'>
                        <p>Manufacturer: {seller} </p>
                    <p>Rating: {ratings} </p>
                    </div>
                </div>
                <button onClick={()=> handleAddToCart(props.product)} className='btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;