import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина пустая </h2>
        <p>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};
