import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartItem, CartEmpty, GoBackButton } from '../components';
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector';

import { useAppDispatch } from '../redux/store';
import { clearPizza } from '../redux/cart/slice';
import { selectCart } from '../redux/cart/selectors';

export function Cart() {
  const { pizza, totalPrice, amount } = useSelector(selectCart);
  const dispatch = useAppDispatch();

  if (!amount) {
    return <CartEmpty />;
  }

  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <GlobalSvgSelector id="cart" />
          Корзина
        </h2>
        <div onClick={() => dispatch(clearPizza())} className="cart__clear">
          <GlobalSvgSelector id="trash" />
          <span>Очистить корзину</span>
        </div>
      </div>

      {pizza.map((item: any, i: number) => (
        <CartItem key={i} type={item.productSize.type} size={item.productSize.size} {...item} />
      ))}

      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            Всего пицц: <b>{amount} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link to="/">
            <GoBackButton />
          </Link>
          <div className="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  );
}
