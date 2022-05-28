import { Item } from "../../../types";
import { useDispatch } from "react-redux";
import { addToCart as addToCartAction } from "../../../store/cart-slice";
import { CardWrapper, MovieInfo } from "./ItemCard.styles";

const ItemCard: React.FC<Item> = ({ item: { image, name, price, id } }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToCartAction({ name, id, price }));
  };

  return (
    <CardWrapper key={id}>
      <img src={image} alt="product" />
      <MovieInfo>
        <div>
          <h1>{name}</h1>
        </div>
      </MovieInfo>
    </CardWrapper>
  );
};

export default ItemCard;
