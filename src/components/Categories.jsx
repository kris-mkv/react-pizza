import React from 'react';

import { AppContext } from '../context';

export function Categories() {
  const { isActive, setIsActive } = React.useContext(AppContext);
  const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => setIsActive(index);

  return (
    <div className="categories">
      <ul>
        {category.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={index === isActive ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
