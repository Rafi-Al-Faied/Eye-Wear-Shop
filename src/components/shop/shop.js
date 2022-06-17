import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';

import Product from '../products/product';

import './shop.css'
import Cart from '../cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(()=> {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    }, [])


const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
}
const handleRemoveToCart = (product) => {
    const newCart = [...cart, product];
  
    // setCart(newCart);
    // const newCart = [...cart, product];
    // setCart(newCart);

}

   return(
       <div className='glassShop'>
             <h1>Find Your Desired EyeWear</h1>
       <div className='shop-container'>

       <div className="cart-container">
                 <h1>Order summary</h1>
                 <p>Selected Items: {cart.map(product=> <Cart key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        setCart= {setCart}
                        ></Cart>)}</p>


            <button onClick={() => setCart((names) => names.filter((_, i,j) => i == Math.ceil(Math.random() * j == ((names.length)-(names.length-1)))))} className='chooseOne'>Choose 1 for me</button>
            <button onClick={() => setCart((names) => names.filter((_, i) => i == names.length))}>Choose again</button>
           </div>


           <div className="products-container">
                {
                    products.map(product=> <Product key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}>
                    </Product>)
                }
           </div>

    


          
       </div>
       </div>
      
   )
};


export default Shop;