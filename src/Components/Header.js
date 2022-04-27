import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";
const Header = ({ onShowCart }) => {
  return (
    <div id="header">
      <h1 className="header-text">Restaurant</h1>
      <div id="navbar">
        <Button
          buttonClass={"cartButton"}
          text={<FaShoppingCart />}
          onClick={onShowCart}
        />
      </div>
    </div>
  );
};

export default Header;
