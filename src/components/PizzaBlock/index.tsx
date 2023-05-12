import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { selectPizzaById } from '../../redux/cart/selectors';
import { addPizza } from '../../redux/cart/slice';

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
      }),
    );
  };

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>

      <div className="pizza-block__selector">
        <ul>
          {types.map((type, i) => (
            <li
              key={i}
              onClick={() => setActiveType(type)}
              className={type === activeType ? 'active' : ''}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={i === activeSize ? 'active' : ''}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button onClick={onClickAddPizza} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {itemsAmount > 0 && <i>{itemsAmount}</i>}
        </button>
      </div>
    </div>
  );
}