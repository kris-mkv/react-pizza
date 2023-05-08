import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/images/empty-cart.png';

export function CartEmpty() {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
}
