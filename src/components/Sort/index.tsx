import React from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { SortItem, SortProperty } from '../../redux/filter/types';
import { selectFilter } from '../../redux/filter/selectors';
import { setSort } from '../../redux/filter/slice';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Sort.module.scss';

const sortList: SortItem[] = [
  { name: 'популярности', sortProperty: SortProperty.RATING_ASC },
  { name: 'возрастанию цены', sortProperty: SortProperty.PRICE_ASC },
  { name: 'убыванию цены', sortProperty: SortProperty.PRICE_DESC },
  { name: 'алфавиту', sortProperty: SortProperty.TITLE_ASC },
];

export const Sort = React.memo(() => {
  const { sort } = useSelector(selectFilter);
  const sortName = sort.name;
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setIsOpen(false);
  };

  React.useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closePopup);

    return () => document.body.removeEventListener('click', closePopup);
  }, []);

  return (
    <div ref={sortRef} className={s.root}>
      <div className={s.container}>
        <GlobalSvgSelector id="triangle" />
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{sortName}</span>
      </div>

      {isOpen && (
        <div className={s.popup}>
          <ul className={s.list}>
            {sortList.map((item, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(item)}
                className={`${s.listItem} ${item.name === sortName ? s.active : ''}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
