import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/index.scss';

import { Home } from './pages/Home';
import { MainLayout } from './layouts/MainLayout';

const PizzaInfo = lazy(() =>
  import(/* webpackChunkName: "PizzaInfo" */ './pages/PizzaInfo').then((m) => ({
    default: m.PizzaInfo,
  }))
);

const Cart = lazy(() =>
  import(/* webpackChunkName: "Cart" */ './pages/Cart').then((m) => ({
    default: m.Cart,
  }))
);

const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './pages/NotFound').then((m) => ({
    default: m.NotFound,
  }))
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>...Загрузка</div>}>
              <PizzaInfo />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>...Загрузка</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>...Загрузка</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
