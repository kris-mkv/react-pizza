type Pizza = {
  category: number;
  id: number;
  imageUrl: string;
  info: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: string[];
};

export enum Status {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  pizza: Pizza[] | object[];
  status: Status;
}

export type FetchPizzaParams = {
  categoryId: number;
  selectedProperty: string;
  searchValue: string;
};
