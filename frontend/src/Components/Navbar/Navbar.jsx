import React, {useState} from 'react'
import './Navbar.scss'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");


  return (
    <div className='nav'>
        <div className="nav__logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav__menu">
            <li className={menu === "shop" ? "active" : ""} onClick={() => {setMenu("shop")}}>Shop</li>
            <li className={menu === "men" ? "active" : ""} onClick={() => {setMenu("men")}}>Men</li>
            <li className={menu === "women" ? "active" : ""} onClick={() => {setMenu("women")}}>Women</li>
            <li className={menu === "kids" ? "active" : ""} onClick={() => {setMenu("kids")}}>Kids</li>
        </ul>
        <div className="nav__login">
            <button>Login</button>
            <div className="nav__login__cart">
                <img src={cart_icon} alt="" />
                <div className="nav__login__cart--count">0</div>
            </div>
        </div>
    </div>
  )
}
