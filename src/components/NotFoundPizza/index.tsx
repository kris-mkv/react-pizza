import classes from './NotFoundPizza.module.scss';

export function NotFoundPizza() {
  return (
    <div className={classes.root}>
      <h2>Произошла ошибка 😕</h2>
      <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
    </div>
  );
}
