import React from 'react';

import { supabase } from '../config/supabaseClient';

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';

export function Home() {
  const [pizza, setPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('pizza').select();

      if (error) {
        console.error(error);
      } else if (data) {
        setPizza(data);
        setIsLoading(false);
      }

      window.scrollTo(0, 0);
    })();
  }, []);

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
