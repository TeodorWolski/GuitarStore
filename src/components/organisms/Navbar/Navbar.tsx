import ActionButton from "../../../components/atoms/ActionButton/ActionButton";
import ShoppingCartIcon from "../../../assets/images/ShoppingCartIcon.svg";
import Logout from "../../../assets/images/Logout.svg";
import ItemsList from "../../molecules/ItemsList/ItemsList";
import { useState } from "react";
import { Wrapper, Heading } from "./Navbar.styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { logout } from "../../../store/auth-slice";

const Navbar = () => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.itemsList);
  const numberOfItems = cartItems.length;
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Wrapper>
      <Heading>Guitar</Heading>
      <div style={{ display: "flex" }}>
        <ItemsList itemsList={cartItems} isVisible={isVisible} />
        <ActionButton
          isCart
          onClick={() => setVisibility(!isVisible)}
          amount={numberOfItems}
          icon={ShoppingCartIcon}
        />
        <ActionButton onClick={handleLogout} icon={Logout} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
