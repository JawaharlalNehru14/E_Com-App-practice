import React, { useEffect, useState } from 'react'

const ViewCart = ({cart,setCart}) => {
  const[total,setTotal] = useState(0)
  
  useEffect(()=>{
setTotal(cart.reduce((acc,curr)=>acc + parseInt(curr.amount),0))
  },[total,cart])

  const handleRemoveCart = (id)=>{
    const removeItems = (cart.filter((c)=>c.id !== id))
    setCart(removeItems)
  }
  return (
    <>
   <div className='cart-container'>
    <h1>Selected Products</h1>
      {cart.map((selectItem)=>(
        <div className='cart-product' key={selectItem.id}>
        <div className='img'>
            <img src={selectItem.pic} alt="image"></img>
        </div>
        <div className='product-cart-detail'>
            <h3>{selectItem.name}</h3>
            <p>Price Rs:- ₹{selectItem.amount}</p>
        </div>
        <div>
          <button onClick={()=>handleRemoveCart(selectItem.id)} className="deleteButton">Delete Item</button>
        </div>
    </div>
  )
  )
  }
      <h3>Total Amount:- ₹{total}</h3>
   </div>
   </>
  )
}

export default ViewCart