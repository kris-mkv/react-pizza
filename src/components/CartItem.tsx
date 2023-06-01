import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector';
import { addPizza, minusPizza, removePizza } from '../redux/cart/slice';
import { useAppDispatch } from '../redux/store';

type Props = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export function CartItem({ id, title, price, imageUrl, type, size, count }: Props) {
  const dispatch = useAppDispatch();

  const addCartItem = () => {
    dispatch(
      addPizza({
        id,
        productSize: {
          type,
          size,
        },
      })
    );
  };

  const minusCartItem = () => {
    dispatch(
      minusPizza({
        id,
        productSize: {
          type,
          size,
        },
      })
    );
  };

  const removeCartItem = () => {
    dispatch(
      removePizza({
        id,
        productSize: {
          type,
          size,
        },
      })
    );
  };

  return (
    <div className="content__items">
      <div className="cart__item">
        <div className="cart__item-img">
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </div>
        <div className="cart__item-info">
          <h3>{title}</h3>
          <p>
            {type} тесто, {size} см.
          </p>
        </div>
        <div className="cart__item-count">
          <button
            onClick={minusCartItem}
            className="button button__outline button__circle cart__item-count-minus"
          >
            <GlobalSvgSelector id="minus" />
          </button>
          <b>{count}</b>
          <button
            onClick={addCartItem}
            className="button button__outline button__circle cart__item-count-plus"
          >
            <GlobalSvgSelector id="plus" />
          </button>
        </div>
        <div className="cart__item-price">
          <b>{price * count} ₽</b>
        </div>
        <div className="cart__item-remove">
          <button onClick={removeCartItem} className="button button__outline button__circle">
            <GlobalSvgSelector id="cross" />
          </button>
        </div>
      </div>
    </div>
  );
}
