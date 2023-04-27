import React from 'react';

import { supabase } from '../config/supabaseClient';

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { AppContext } from '../context';

export function Home() {
  const { searchValue } = React.useContext(AppContext);
  const [pizza, setPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isActive, setIsActive] = React.useState(0);
  const [isSelected, setIsSelected] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);

      let query = supabase.from('pizza').select();
      const selectedProperty = isSelected.sortProperty;

      if (isActive > 0) {
        query = query.eq('category', isActive);
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
  }, [isActive, isSelected, searchValue]);

  return (
    <>
      <div className="content__top">
        <AppContext.Provider value={{ isActive, setIsActive, isSelected, setIsSelected }}>
          <Categories />
          <Sort />
        </AppContext.Provider>
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
