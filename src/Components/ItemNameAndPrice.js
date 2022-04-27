import QuantityOfItems from "./QuantityOfItems";

const ItemNameAndPrice = ({ name, price, quantity }) => {
  return (
    <div className="name-and-price">
      <span id="name">{name}</span>
      <span id="price">Price: {price}</span>
      <QuantityOfItems quantity={quantity} />
    </div>
  );
};

export default ItemNameAndPrice;
