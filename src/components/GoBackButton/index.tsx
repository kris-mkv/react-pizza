import s from './GoBackButton.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

type Props = {
  text: string;
};

export function GoBackButton({ text }: Props) {
  return (
    <button className={`button button__outline button__add ${s.root}`}>
      <GlobalSvgSelector id="arrow" />
      <span>{text}</span>
    </button>
  );
}
