import { useSelector } from 'react-redux';

import { setCategoryId, selectFilter } from '../redux/slices/filterSlice';
import { useAppDispatch } from '../redux/store';

const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export function Categories() {
  const { categoryId } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

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
