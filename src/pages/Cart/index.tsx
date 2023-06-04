import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartItem, CartEmpty, GoBackButton } from '../../components';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useAppDispatch } from '../../redux/store';
import { clearPizza } from '../../redux/cart/slice';
import { selectCart } from '../../redux/cart/selectors';
import s from './Cart.module.scss';

export function Cart() {
  const { pizza, totalPrice, amount } = useSelector(selectCart);
  const dispatch = useAppDispatch();

  if (!amount) {
    return <CartEmpty />;
  }

  return (
    <div className={s.root}>
      <div className={s.topBlock}>
        <h2 className={s.title}>
          <GlobalSvgSelector id="cart" />
          Корзина
        </h2>
        <div onClick={() => dispatch(clearPizza())} className={s.clear}>
          <GlobalSvgSelector id="trash" />
          <span>Очистить корзину</span>
        </div>
      </div>

      {pizza.map((item: any, i: number) => (
        <CartItem key={i} type={item.productSize.type} size={item.productSize.size} {...item} />
      ))}

      <div className={s.bottomBlock}>
        <div className={s.details}>
          <span>
            Всего пицц: <b>{amount} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </span>
        </div>
        <div className={s.buttonsBlock}>
          <Link to="/" className="button-link">
            <GoBackButton text="Вернуться назад" />
          </Link>
          <div className={`button ${s.payButton}`}>
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  );
}
