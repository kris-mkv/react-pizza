import React from 'react';
import { useSelector } from 'react-redux';

import s from './Categories.module.scss';
import { setCategoryId } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';
import { useAppDispatch } from '../../redux/store';

const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories = React.memo(() => {
  const { categoryId } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const onClickCategory = React.useCallback(
    (index: number) => dispatch(setCategoryId(index)),
    [dispatch]
  );

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {category.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={`${s.listItem} ${i === categoryId ? s.active : ''}`}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
});
