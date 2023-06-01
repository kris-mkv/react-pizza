import { Link } from 'react-router-dom';

import cartEmptyImg from '../../assets/images/empty-cart.png';
import s from './CartEmpty.module.scss';

export function CartEmpty() {
  return (
    <div className={s.root}>
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className={`button ${s.button}`}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}
