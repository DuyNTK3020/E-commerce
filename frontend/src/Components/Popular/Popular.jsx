import React from 'react'
import './Popular.scss'
import { Item } from '../Item/Item'
import data_product from '../Assets/data'

export const Popular = () => {
  return (
        <div className="popular">
            <h2>POPULAR IN WOMEN</h2>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key ={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
                })}
            </div>
        </div>
    )
}
