import ActionButton from "../../../components/atoms/ActionButton/ActionButton";
import ShoppingCartIcon from "../../../assets/images/ShoppingCartIcon.svg";
import Logout from "../../../assets/images/Logout.svg";
import { Wrapper } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Wrapper>
      <h1>Guitar</h1>
      <div style={{ display: "flex" }}>
        <ActionButton icon={ShoppingCartIcon} />
        <ActionButton icon={Logout} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
