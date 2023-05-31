import classes from './GoBackButton.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

export function GoBackButton() {
  return (
    <button className={`button button--outline button--add ${classes.root}`}>
      <GlobalSvgSelector id="arrow" />
      <span>Вернуться назад</span>
    </button>
  );
}
