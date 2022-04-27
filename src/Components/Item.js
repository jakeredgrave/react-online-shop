import { useState } from "react";
import ItemInfo from "./ItemInfo";

const Item = ({ item, quantity, onAdd, onDecrease }) => {
  return (
    <div className="item">
      <img className="image" src={item.img} alt={item.alt} />
      <ItemInfo
        name={item.name}
        price={item.price}
        id={item.id}
        quantity={quantity}
        onAdd={onAdd}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export default Item;
