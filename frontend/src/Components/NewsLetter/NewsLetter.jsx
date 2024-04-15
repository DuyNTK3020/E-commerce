import React from 'react'
import './NewsLetter.scss'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newletter and atay updated</p>
      <div>
        <input type="email" placeholder='Your Email ID' />
        <button>Subcribe</button>
      </div>
    </div>
  )
}
