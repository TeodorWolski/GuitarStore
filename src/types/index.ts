export interface BasketItem {
  id: number;
  price: number;
  quantity: number;
  name: string;
}

export interface Item {
  item: {
    id: number;
    image: string;
    price: number;
    name: string;
  };
}
