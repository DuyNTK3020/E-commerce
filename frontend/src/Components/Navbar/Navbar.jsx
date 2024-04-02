import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss'
import logo from '../Assets/logo.png'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");


  return (
    <div className='nav'>
        <div className="nav__logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav__menu">
            <li className={menu === "shop" ? "active" : ""} onClick={() => {setMenu("shop")}}><Link to ='/'>Shop</Link></li>
            <li className={menu === "men" ? "active" : ""} onClick={() => {setMenu("men")}}><Link to='/mens'>Men</Link></li>
            <li className={menu === "women" ? "active" : ""} onClick={() => {setMenu("women")}}><Link to='/womens'>Women</Link></li>
            <li className={menu === "kids" ? "active" : ""} onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link></li>
        </ul>
        <div className="nav__login">
            <Link to='/login'><button onClick={() => {setMenu("")}}>Login</button></Link>
            <div className="nav__login__cart">
                <Link onClick={() => {setMenu("")}} to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
                <div className="nav__login__cart--count">0</div>
            </div>
        </div>
    </div>
  )
}
