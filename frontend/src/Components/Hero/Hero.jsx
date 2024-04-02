import React from 'react'
import './Hero.scss'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero--left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero--left-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>colection</p>
                <p>for everyone</p>
            </div>
            <div className="hero--left-latest-btn">
                <div>Latest Collection</div>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
        <div className="hero--right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
