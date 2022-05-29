import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import Navbar from "../../components/organisms/Navbar/Navbar";
import { Wrapper } from "./ItemPage.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

const ItemPage = () => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <>
      <Navbar />
      <div
        style={{
          transform: "translateY(10%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Wrapper>
          {products.map((product) => (
            <div key={product.id}>
              <ItemCard item={product} />
            </div>
          ))}
        </Wrapper>
      </div>
    </>
  );
};

export default ItemPage;
