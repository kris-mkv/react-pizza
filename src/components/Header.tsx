import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Search } from './Search';
import { selectCart } from '../redux/cart/selectors';
import { selectPizzaData } from '../redux/pizza/selectors';
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector';

export function Header() {
  const location = useLocation();
  const { totalPrice, amount } = useSelector(selectCart);
  const { status } = useSelector(selectPizzaData);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <GlobalSvgSelector id="logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        {location.pathname !== '/cart' && (
          <>
            {status !== 'error' && <Search />}
            <div className="header__cart">
              <Link to="/cart" className="button button--cart">
                <span>{totalPrice} ₽</span>
                <div className="button__delimiter"></div>
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
