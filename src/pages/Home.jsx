import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { fetchPizza } from '../redux/slices/pizzaSlice';
import { NotFoundPizza } from '../components/NotFoundPizza';

export function Home() {
  const dispatch = useDispatch();
  const { pizza, status } = useSelector((state) => state.pizza);
  const { categoryId, sort } = useSelector((state) => state.filter);
  const selectedProperty = sort.sortProperty;
  const { searchValue } = useSelector((state) => state.search);

  React.useEffect(() => {
    dispatch(
      fetchPizza({
        categoryId,
        selectedProperty,
        searchValue,
      }),
    );

    window.scrollTo(0, 0);
  }, [categoryId, selectedProperty, searchValue]);

  return (
    <>
      {status === 'error' ? (
        <NotFoundPizza />
      ) : (
        <>
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {status === 'pending'
              ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
              : pizza.map((pizza, i) => <PizzaBlock key={i} {...pizza} />)}
          </div>
        </>
      )}
    </>
  );
}
