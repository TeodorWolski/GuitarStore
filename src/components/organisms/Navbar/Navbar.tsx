import ActionButton from "../../../components/atoms/ActionButton/ActionButton";
import ShoppingCartIcon from "../../../assets/images/ShoppingCartIcon.svg";
import Logout from "../../../assets/images/Logout.svg";
import { Wrapper } from "./Navbar.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.itemsList);
  const numberOfItems = cartItems.length;
  return (
    <Wrapper>
      <h1>Guitar</h1>
      <div style={{ display: "flex" }}>
        <ActionButton isCart amount={numberOfItems} icon={ShoppingCartIcon} />
        <ActionButton icon={Logout} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
