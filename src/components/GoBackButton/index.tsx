import classes from './GoBackButton.module.scss';

export function GoBackButton() {
  return (
    <button className={`button button--outline button--add ${classes.root}`}>
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 13L1 6.93015L6.86175 1"
          stroke="#D3D3D3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Вернуться назад</span>
    </button>
  );
}
