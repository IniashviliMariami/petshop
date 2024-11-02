import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel'
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import AnimalDetail from './components/AnimalDetail';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
