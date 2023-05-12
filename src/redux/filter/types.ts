export enum SortProperty {
  RATING_ASC = 'rating',
  PRICE_ASC = 'price',
  PRICE_DESC = '-price',
  TITLE_ASC = 'title',
}

export type SortItem = {
  name: string;
  sortProperty: SortProperty;
};

export interface FilterSliceState {
  categoryId: number;
  sort: SortItem;
}
