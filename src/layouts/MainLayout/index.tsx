import { Outlet } from 'react-router-dom';

import { Header } from '../../components';
import s from './MainLayout.module.scss';

export function MainLayout() {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.content}>
        <div className={s.container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
