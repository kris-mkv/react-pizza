import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { supabase } from '../../config/supabaseClient';

import classes from './PizzaInfo.module.scss';

type PizzaData = {
  imageUrl: string;
  title: string;
  info: string;
};

export function PizzaInfo() {
  const [pizza, setPizza] = React.useState<PizzaData>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await supabase.from('pizza').select().eq('id', id).throwOnError();

        if (!data.length) {
          throw new Error('Такого id не существует');
        }

        setPizza(data[0] as PizzaData);
      } catch (error) {
        console.error(error);
        alert('К сожалению, не получилось загрузить информацию о пицце.');
        navigate('/');
      }
    })();
  }, [id, navigate]);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className={classes.root}>
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <p>{pizza.info}</p>
    </div>
  );
}
