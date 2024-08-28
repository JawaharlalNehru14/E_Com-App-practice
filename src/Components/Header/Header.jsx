import React from 'react'
import {Link} from 'react-router-dom'
const Header = ({cart}) => {
  return (
    <div className='navbar'>
    <div className='logo'>foot Cart</div>
    <ul>
        <li>
        <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/cart"}>View Cart </Link>
        <span className="numberOfcards">{cart.length}</span>
        </li>
        
    </ul>
    </div>
  )
}

export default Header