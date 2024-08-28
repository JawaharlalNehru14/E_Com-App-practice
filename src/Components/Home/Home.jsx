import React, { useState } from 'react'
import data from "../Dummy Data/product.json"
import ShowProduct from '../Product/ShowProduct'

const Home = ({cart,setCart}) => {
  //  console.log(data)
  const[products,setProduct] = useState(data)
  return (
   <div className='product-container'>
   {products.map((product)=>(
    <ShowProduct key={product.id} product={product} cart={cart} setCart={setCart} />
        
   ))}
   </div>
  )
}

export default Home