// import { useState } from "react";
import Button from "./Button";
import ItemNameAndPrice from "./ItemNameAndPrice";
import QuantityOfItems from "./QuantityOfItems";

const ItemInfo = ({ name, price, id, quantity, onAdd, onDecrease }) => {
  return (
    <div className="info">
      <ItemNameAndPrice name={name} price={price} />
      <div id="buttons-box">
        <Button
          buttonClass={"addOrReduceButton"}
          text={"-"}
          onClick={() => onDecrease(id - 1)}
        />

        <QuantityOfItems quantity={quantity} />

        <Button
          buttonClass={"addOrReduceButton"}
          text={"+"}
          onClick={() => onAdd(id - 1)}
        />
      </div>
    </div>
  );
};

export default ItemInfo;
