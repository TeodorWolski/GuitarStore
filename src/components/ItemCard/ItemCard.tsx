import { Item } from "../../types";
import { useDispatch } from "react-redux";
import { addToCart as addToCartAction } from "../../store/cart-slice";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ItemCard: React.FC<Item> = ({ item: { image, name, price, id } }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addToCartAction({ name, id, price }));
  };
  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardHeader title={name} />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {price} pln
        </Typography>
        <Button onClick={addToCart} variant="contained">
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
