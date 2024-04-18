import React, { useContext } from "react";
import { ShopContext } from "./../Context/ShopContext";
import dropdown_icon from "./../Components/Assets/dropdown_icon.png"

export const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return <div className="shop-category">
        <img src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {/* {all_product.map() => {

          }} */}
        </div>
    </div>;
};
