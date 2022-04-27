import Button from "./Button";
import AddItemToCart from "./AddItemToCart";

const Cart = ({ items, quantityValues }) => {
  return (
    <div id="cart">
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        Shopping Cart
      </h3>
      <br />
      <br />
      {items.map((item) => (
        <AddItemToCart
          key={item.id}
          item={item}
          quantity={quantityValues[item.id - 1]}
        />
      ))}
      {/* <AddItemToCart /> */}
      <Button buttonClass={"buyButton"} text="Buy" />
    </div>
  );
};

export default Cart;
