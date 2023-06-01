import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { selectPizzaById } from '../../redux/cart/selectors';
import { addPizza } from '../../redux/cart/slice';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

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
        <button
          onClick={onClickAddPizza}
          className="pizza-block__button button button__outline button__add"
        >
          <GlobalSvgSelector id="plus" />
          <span>Добавить</span>
          {itemsAmount > 0 && <i>{itemsAmount}</i>}
        </button>
      </div>
    </div>
  );
}
