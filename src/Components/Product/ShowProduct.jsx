import React from 'react'

const ShowProduct = ({product,cart,setCart}) => {
  
  const handleAdd = ()=>{
    setCart([...cart,product])
  }
  const handleDelete = ()=>{
    const removeCartProduct = (cart.filter((c)=>c.id !== product.id))
    setCart(removeCartProduct)
  }
    const name = product.name.length >=15 ? product.name.substring(0,15) + '...' : product.name;


  return (
    <div className='product'>
        <div className='img'>
            <img src={product.pic} alt={product.pic}></img>
        </div>
        <div className='detail'>
       <h4>{name}</h4>
       <p>Price Rs:- ₹{product.amount} </p>
       {cart.includes(product) ? 
       <button className="removeCart" onClick={()=>handleDelete()}>Remove to Cart</button> 
        :
        <button className="addCart" onClick={()=>handleAdd()}>Add to Cart</button> }
       </div>
        </div>
  )
}

export default ShowProduct