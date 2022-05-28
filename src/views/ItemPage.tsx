import { useSelector } from "react-redux";
import ItemCard from "../components/molecules/ItemCard/ItemCard";
import { DUMMY_PRODUCTS } from "../data";
import { RootState } from "../store/index";

const ItemPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.itemsList);
  console.log(cartItems);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Item Page</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "55% 55%",
          gridGap: "30px",
        }}
      >
        {DUMMY_PRODUCTS.map((product) => (
          <div key={product.id}>
            <ItemCard item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
