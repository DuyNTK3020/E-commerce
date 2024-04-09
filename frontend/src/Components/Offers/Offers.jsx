import React from 'react'
import './Offers.scss'
import exclusive_image from '../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h2>Exclusive</h2>
            <h2>Offer For You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
