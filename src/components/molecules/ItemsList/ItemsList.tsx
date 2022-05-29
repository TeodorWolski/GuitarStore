import { Wrapper, ListItem, InfoWrapper } from "./ItemsList.styles";
import { BasketItem } from "../../../types";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/cart-slice";

interface Props {
  isVisible: boolean;
  itemsList: BasketItem[];
}

const ItemsList: React.FC<Props> = ({ isVisible, itemsList }) => {
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (
    id: number,
    name: string,
    quantity: number,
    price: number
  ) => {
    dispatch(addToCart({ id, name, quantity, price }));
  };
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Wrapper isVisible={isVisible}>
      <ul style={{ listStyle: "none", width: "100%" }}>
        {itemsList.length > 0 ? (
          itemsList.map(({ id, totalPrice, quantity, name, price }) => (
            <ListItem key={id}>
              <h1>{name}</h1>
              <InfoWrapper>
                <p>{totalPrice}$</p>
                <div>
                  <button
                    onClick={() =>
                      handleIncreaseQuantity(id, name, quantity, price)
                    }
                  >
                    +
                  </button>
                  <strong>{quantity}</strong>
                  <button onClick={() => handleRemoveFromCart(id)}>-</button>
                </div>
              </InfoWrapper>
            </ListItem>
          ))
        ) : (
          <h1>Wrzuć coś do koszyka!</h1>
        )}
      </ul>
    </Wrapper>
  );
};

export default ItemsList;
