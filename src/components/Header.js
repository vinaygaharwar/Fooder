import React, {useContext} from 'react'
import '../App.scss';
import {Link} from 'react-router-dom'
import UserContext from '../utils/UserContext';
import {useSelector} from 'react-redux';

function Header() {
  const {loggedInUser, setUserName}=useContext(UserContext)

  const cartItems =useSelector((store)=> store.cart.items)
  return (
    <div className='header'>
        <p className='logo'>Fooder</p>
        <div >
          <input type='text' value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
            <ul className='headerLinks'>
                <li>
                  <Link className='link' to="/">Home</Link>
                  </li>
                <li>
                <Link className='link' to="/about">
                  About Us
                  </Link></li>
                <li>
                <Link className='link' to="/contact">Contact Us
                </Link></li>
                <li><Link className='link' to="/cart">Cart ({cartItems.length} items)</Link></li>
                {/* <li>{loggedInUser}</li> */}
            </ul>
        </div>
        </div>
  )
}

export default Header