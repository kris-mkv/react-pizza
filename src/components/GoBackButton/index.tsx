import s from './GoBackButton.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

export function GoBackButton() {
  return (
    <button className={`button button__outline button__add ${s.root}`}>
      <GlobalSvgSelector id="arrow" />
      <span>Вернуться назад</span>
    </button>
  );
}
