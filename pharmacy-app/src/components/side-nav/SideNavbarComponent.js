import React from 'react'
import { Link } from 'react-router-dom'
import './SideNavbarComponent.css';

const SideNavbarComponent = () => {
  return (
    <div className='side-container'>
        <Link className='link' to='/list-product' >Products</Link>
        <Link className='link' to='/about' >About application</Link>
    </div>
  )
}

export default SideNavbarComponent