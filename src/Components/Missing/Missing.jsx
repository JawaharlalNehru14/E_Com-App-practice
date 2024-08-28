import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    
    <>
    <div className="container">
        <div className="row">
        <p>Missing * 404 *</p>
        <Link to='/'>Click to Return Home Page</Link>
        </div>
    </div>
    </>
  )
}

export default Missing