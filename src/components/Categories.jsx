import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';

const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export function Categories() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onClickCategory = (index) => dispatch(setCategoryId(index));

  return (
    <div className="categories">
      <ul>
        {category.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={index === categoryId ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
