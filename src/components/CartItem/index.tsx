import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { addPizza, minusPizza, removePizza } from '../../redux/cart/slice';
import { useAppDispatch } from '../../redux/store';
import s from './CartItem.module.scss';

type Props = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  productSize: {
    type: string;
    size: number;
  };
  count: number;
};

export function CartItem({ id, title, price, imageUrl, count, productSize }: Props) {
  const dispatch = useAppDispatch();

  const addCartItem = () => {
    dispatch(
      addPizza({
        id,
        productSize,
      })
    );
  };

  const minusCartItem = () => {
    dispatch(
      minusPizza({
        id,
        productSize,
      })
    );
  };

  const removeCartItem = () => {
    dispatch(
      removePizza({
        id,
        productSize,
      })
    );
  };

  return (
    <div className={s.root}>
      <div className={s.item}>
        <div className={s.itemImage}>
          <img src={imageUrl} alt="Pizza" />
        </div>
        <div className={s.info}>
          <h3>{title}</h3>
          <p>
            {productSize.type} тесто, {productSize.size} см.
          </p>
        </div>
        <div className={s.count}>
          <button
            onClick={minusCartItem}
            className={`button button__outline button__circle ${s.minus}`}
          >
            <GlobalSvgSelector id="minus" />
          </button>
          <b>{count}</b>
          <button onClick={addCartItem} className="button button__outline button__circle">
            <GlobalSvgSelector id="plus" />
          </button>
        </div>
        <div className={s.price}>
          <b>{price * count} ₽</b>
        </div>
        <div className={s.remove}>
          <button
            onClick={removeCartItem}
            className={`button button__outline button__circle ${s.button}`}
          >
            <GlobalSvgSelector id="cross" />
          </button>
        </div>
      </div>
    </div>
  );
}
