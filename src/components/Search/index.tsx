import React from 'react';
import debounce from 'lodash.debounce';

import s from './Search.module.scss';
import { setSearchValue } from '../../redux/search/slice';
import { useAppDispatch } from '../../redux/store';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

export function Search() {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useMemo(
    () =>
      debounce((str: string) => {
        dispatch(setSearchValue(str));
      }, 350),
    [dispatch]
  );

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const clearSearchValue = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  return (
    <div className={s.root}>
      <div className={s.searchIcon}>
        <GlobalSvgSelector id="search" />
      </div>
      <input
        ref={inputRef}
        onChange={changeSearchValue}
        className={s.input}
        type="text"
        placeholder="Поиск пиццы..."
        value={value}
      />
      {value && (
        <button className={s.closeIcon} onClick={clearSearchValue}>
          <GlobalSvgSelector id="close" />
        </button>
      )}
    </div>
  );
}
