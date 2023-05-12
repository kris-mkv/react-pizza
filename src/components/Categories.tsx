import React from 'react';
import { useSelector } from 'react-redux';

import { setCategoryId, selectFilter } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';

const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories = React.memo(() => {
  const { categoryId } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const onClickCategory = React.useCallback(
    (index: number) => dispatch(setCategoryId(index)),
    [dispatch],
  );

  return (
    <div className="categories">
      <ul>
        {category.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={i === categoryId ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
});
