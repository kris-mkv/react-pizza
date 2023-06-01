import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { selectPizzaById } from '../../redux/cart/selectors';
import { addPizza } from '../../redux/cart/slice';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './PizzaBlock.module.scss';

type Props = {
  title: string;
  price: number;
  imageUrl: string;
  types: string[];
  sizes: number[];
  id: number;
};

export function PizzaBlock({ title, price, imageUrl, types, sizes, id }: Props) {
  const cartItems = useSelector(selectPizzaById(id));
  const dispatch = useAppDispatch();
  const [activeType, setActiveType] = React.useState('тонкое');
  const [activeSize, setActiveSize] = React.useState(0);

  const itemsAmount = cartItems.reduce((value: number, item: any) => value + item.count, 0);

  const onClickAddPizza = () => {
    dispatch(
      addPizza({
        id,
        title,
        price,
        imageUrl,
        productSize: {
          type: activeType,
          size: sizes[activeSize],
        },
      })
    );
  };

  return (
    <div className={s.root}>
      <Link to={`/pizza/${id}`}>
        <img className={s.pizzaImage} src={imageUrl} alt="Pizza" />
        <h4 className={s.title}>{title}</h4>
      </Link>

      <div className={s.selector}>
        <ul className={s.list}>
          {types.map((type, i) => (
            <li
              key={i}
              onClick={() => setActiveType(type)}
              className={`${s.listItem} ${type === activeType ? s.active : ''}`}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul className={s.list}>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={`${s.listItem} ${i === activeSize ? s.active : ''}`}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      <div className={s.bottomBlock}>
        <div className={s.price}>от {price} ₽</div>
        <button
          onClick={onClickAddPizza}
          className={`${s.button} button button__outline button__add`}
        >
          <GlobalSvgSelector id="plus" />
          <span>Добавить</span>
          {itemsAmount > 0 && <i>{itemsAmount}</i>}
        </button>
      </div>
    </div>
  );
}
