import Item from "./Item";

const Shop = ({ items, quantityValues, onAdd, onDecrease }) => {
  return (
    <div className="shop">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          quantity={quantityValues[item.id - 1]}
          onAdd={onAdd}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
};

export default Shop;
