import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Search } from '../Search';
import { selectCart } from '../../redux/cart/selectors';
import { selectPizzaData } from '../../redux/pizza/selectors';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';

export function Header() {
  const location = useLocation();
  const { totalPrice, amount } = useSelector(selectCart);
  const { status } = useSelector(selectPizzaData);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <Link to="/">
          <div className={s.logo}>
            <GlobalSvgSelector id="logo" />
            <div className={s.mainInfo}>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        {location.pathname !== '/cart' && (
          <>
            {status !== 'error' && <Search />}
            <div>
              <Link to="/cart" className={`button ${s.cartButton}`}>
                <span>{totalPrice} ₽</span>
                <div className={s.delimiter}></div>
                <GlobalSvgSelector id="cart" />
                <span>{amount}</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
