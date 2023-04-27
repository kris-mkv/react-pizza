import React from 'react';

import classes from './Search.module.scss';
import { AppContext } from '../../context';

export function Search() {
  const { searchValue, setSearchValue } = React.useContext(AppContext);

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
        onChange={(e) => setSearchValue(e.target.value)}
        className={classes.input}
        type="text"
        placeholder="Поиск пиццы..."
        value={searchValue}
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
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
