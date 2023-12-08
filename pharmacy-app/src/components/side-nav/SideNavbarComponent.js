import React from 'react'
import { Link } from 'react-router-dom'
import './SideNavbarComponent.css';

const SideNavbarComponent = () => {
  return (
    <div className='side-container'>
        <Link className='link' to='/pharmacy-app/list-product'>Products</Link>
        <Link className='link' to='/pharmacy-app/about' >About application</Link>
    </div>
  )
}

export default SideNavbarComponent