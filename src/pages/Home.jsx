import React from 'react';
import { useSelector } from 'react-redux';

import { supabase } from '../config/supabaseClient';

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';

export function Home() {
  const { categoryId, sort } = useSelector((state) => state.filter);
  const selectedProperty = sort.sortProperty;
  const { searchValue } = useSelector((state) => state.search);

  const [pizza, setPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);

      let query = supabase.from('pizza').select();

      if (categoryId > 0) {
        query = query.eq('category', categoryId);
      }
      if (selectedProperty.includes('-')) {
        query = query.order(selectedProperty.replace('-', ''), { ascending: false });
      } else {
        query = query.order(selectedProperty);
      }
      if (searchValue) {
        query = query.ilike('title', `%${searchValue}%`);
      }

      const { data, error } = await query;

      if (error) {
        console.error(error);
      } else if (data) {
        setPizza(data);
        setIsLoading(false);
      }

      window.scrollTo(0, 0);
    })();
  }, [categoryId, selectedProperty, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizza.map((pizza, i) => <PizzaBlock key={i} {...pizza} />)}
      </div>
    </>
  );
}
