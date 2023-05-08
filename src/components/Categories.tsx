import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, selectFilter } from '../redux/slices/filterSlice';

const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export function Categories() {
  const { categoryId } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onClickCategory = (index: number) => dispatch(setCategoryId(index));

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
}
