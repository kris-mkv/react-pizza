import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { PizzaInfo } from './pages/PizzaInfo';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pizza/:id" element={<PizzaInfo />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
