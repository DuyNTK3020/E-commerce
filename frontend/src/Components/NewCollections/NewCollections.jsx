import React from 'react'
import './NewCollections.scss'
import new_collections from './../Assets/new_collections';
import { Item } from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h2>NEW COLLECTIONS</h2>
      <div className="collections">
        {new_collections.map((item,i) => {
           return <Item key ={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
        })}
      </div>
    </div>
  )
}