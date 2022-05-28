import { Wrapper, ListItem, InfoWrapper } from "./ItemsList.styles";
import { BasketItem } from "../../../types";
interface Props {
  isVisible: boolean;
  itemsList: BasketItem[];
}

const ItemsList: React.FC<Props> = ({ isVisible, itemsList }) => {
  return (
    <Wrapper isVisible={isVisible}>
      <ul style={{ listStyle: "none", width: "100%" }}>
        {itemsList.length > 0 ? (
          itemsList.map(({ id, price, quantity, name }) => (
            <ListItem key={id}>
              <h1>{name}</h1>
              <InfoWrapper>
                <p>{price}$</p>
                <div>
                  <button>+</button>
                  <strong>{quantity}</strong>
                  <button>-</button>
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
