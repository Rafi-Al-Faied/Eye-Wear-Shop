import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = (props) => {

    const {product, handleAddToCart, setCart} = props;
    const { name, img,  price } = product;
    return (
        <div className='cart'>
        <img src={img} alt=""></img>
        <div className='cart-info'>
            <p className='cart-name'>{name}</p>
            <button  onClick={() =>
            setCart((names) => names.filter((_, i) => i !== names.length - 1))
        }>   <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        </div>
    </div>
    );
};

export default Cart;