import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import classes from './Search.module.scss';

import { setSearchValue } from '../../redux/slices/searchSlice';

export function Search() {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useMemo(
    () =>
      debounce((str: string) => {
        dispatch(setSearchValue(str));
      }, 350),
    [dispatch],
  );

  const changeSearchValue = (e: any) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const clearSearchValue = () => {
    setValue('');
    dispatch(setSearchValue(''));
    inputRef.current?.focus();
  };

  return (
    <div className={classes.root}>
      <svg className={classes.searchIcon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <title />
        <path
          d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
          style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: '32px' }}
        />
        <line
          style={{
            fill: 'none',
            stroke: '#000',
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: '32px',
          }}
          x1="338.29"
          x2="448"
          y1="338.29"
          y2="448"
        />
      </svg>
      <input
        ref={inputRef}
        onChange={changeSearchValue}
        className={classes.input}
        type="text"
        placeholder="Поиск пиццы..."
        value={value}
      />
      {value && (
        <svg
          onClick={clearSearchValue}
          className={classes.closeIcon}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <g id="cross">
            <line
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2px',
              }}
              x1="7"
              x2="25"
              y1="7"
              y2="25"
            />
            <line
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2px',
              }}
              x1="7"
              x2="25"
              y1="25"
              y2="7"
            />
          </g>
        </svg>
      )}
    </div>
  );
}
