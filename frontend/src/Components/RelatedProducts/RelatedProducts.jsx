import React from "react";
import "./RelatedProducts.scss"
import data_products from "./../Assets/data"
import { Item } from "./../Item/Item"

export const RelatedProducts = () => {
    return <div className="relateproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relateproducts-item">
            {data_products.map((item,i) => {
                return <Item key ={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}
        </div>
    </div>;
};
