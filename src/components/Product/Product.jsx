import React from 'react';

const Product = (props) => {

    const {img, name, category, price, rating, seller} = props.product;

    return (
        <div>
            <img src={img} alt="" />
                <h2> {name} </h2>
                <p>Category: {category} </p>
                <p>Price: {price} </p>

                <p>Manufacturer: {seller} </p>
                <p>Rating: {rating} </p>

                <button>Add to Cart</button>
        </div>
    );
};

export default Product;