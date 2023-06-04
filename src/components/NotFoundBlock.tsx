import { Link } from 'react-router-dom';
import { GoBackButton } from './GoBackButton';

export function NotFoundBlock() {
  return (
    <div className="not-found-block">
      <span className="smile">😕</span>
      <h2>Ничего не найдено</h2>
      <p>К сожалению, данная страница отсутствует в нашем интернет-магазине</p>
      <Link to="/" className="button-link">
        <GoBackButton text="Вернуться на главную страницу" />
      </Link>
    </div>
  );
}
