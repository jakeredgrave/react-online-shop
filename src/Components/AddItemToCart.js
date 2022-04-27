import { useState } from "react";
import ItemNameAndPrice from "./ItemNameAndPrice";
const ItemInCart = ({ item, quantity }) => {
  return (
    <div className="item-in-cart">
      <div className="name-price-in-cart">
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
      <span>{quantity}</span>
    </div>
  );
};

export default ItemInCart;
