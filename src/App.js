import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { AppContext } from './context';

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
      </AppContext.Provider>
      <div className="content">
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <AppContext.Provider value={{ searchValue, setSearchValue }}>
                  <Home />
                </AppContext.Provider>
              }
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
