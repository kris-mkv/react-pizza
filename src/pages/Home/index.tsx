import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, Sort, PizzaBlock, Skeleton, NotFoundPizza } from '../../components';
import { useAppDispatch } from '../../redux/store';
import { selectPizzaData } from '../../redux/pizza/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { selectSearchValue } from '../../redux/search/selectors';
import { fetchPizza } from '../../redux/pizza/asyncActions';
import s from './Home.module.scss';

type PizzaCard = {
  title: string;
  price: number;
  imageUrl: string;
  types: string[];
  sizes: number[];
  id: number;
};

export function Home() {
  const dispatch = useAppDispatch();
  const { pizza, status } = useSelector(selectPizzaData);
  const { categoryId, sort } = useSelector(selectFilter);
  const selectedProperty = sort.sortProperty;
  const { searchValue } = useSelector(selectSearchValue);

  const pizzaCards = pizza.map((pizza: PizzaCard) => <PizzaBlock key={pizza.id} {...pizza} />);
  const pizzaCardsSkeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  React.useEffect(() => {
    dispatch(
      fetchPizza({
        categoryId,
        selectedProperty,
        searchValue,
      })
    );

    window.scrollTo(0, 0);
  }, [categoryId, selectedProperty, searchValue, dispatch]);

  return (
    <>
      {status === 'error' ? (
        <NotFoundPizza />
      ) : (
        <>
          <div className={s.topBlock}>
            <Categories />
            <Sort />
          </div>
          <h2 className={s.title}>Все пиццы</h2>
          <div className={s.items}>{status === 'pending' ? pizzaCardsSkeletons : pizzaCards}</div>
        </>
      )}
    </>
  );
}
