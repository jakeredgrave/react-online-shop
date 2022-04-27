import { useState } from "react";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Shop from "./Components/Shop";
import img1 from "./Pictures/food1.jpg";
import img2 from "./Pictures/food2.jpg";
import img3 from "./Pictures/food3.jpg";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Spaghetti",
      price: "300$",
      img: img1,
      alt: "Plate of Spaghetti",
    },
    {
      id: 2,
      name: "Pizza",
      price: "500$",
      img: img2,
      alt: "Pizza",
    },
    {
      id: 3,
      name: "Tiramisu",
      price: "150$",
      img: img3,
      alt: "Tiramisu",
    },
  ]);
  const [quantityValues, setQuantityValues] = useState([0, 0, 0]);
  const increaseQuantityValues = (id) => {
    let values = [...quantityValues];
    // console.log(values[id]);
    values[id]++;
    // console.log(values[id]);
    setQuantityValues(values);
  };
  const decreaseQuantityValues = (id) => {
    let values = [...quantityValues];
    // console.log(values[id]);
    values[id] > 0 && values[id]--;
    // console.log(values[id]);
    setQuantityValues(values);
  };

  return (
    <div className="container">
      <Header onShowCart={() => setShowCart(!showCart)} />
      {showCart && <Cart items={items} quantityValues={quantityValues} />}
      <Shop
        items={items}
        quantityValues={quantityValues}
        onAdd={increaseQuantityValues}
        onDecrease={decreaseQuantityValues}
      />
    </div>
  );
}

export default App;
