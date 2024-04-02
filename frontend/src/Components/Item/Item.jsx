import React from 'react'
import './Item.scss'

export const Item = (props) => {
  return (
    <div className="item">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-price">
            <div className="item-price-new">
                {props.new_priece}
            </div>
            <div className="item-price-old">
                {props.old_priece}
            </div>
        </div>
    </div>
  )
}
