import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { PizzaInfo } from './pages/PizzaInfo';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="" element={<Home />} />
        <Route exact path="pizza/:id" element={<PizzaInfo />} />
        <Route exact path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
