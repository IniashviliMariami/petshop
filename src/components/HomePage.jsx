import React from 'react';
import AnimalList from './AnimalList';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Pet Shop</h1>
      <h2>Popular Animals</h2>
      <AnimalList />
      <h2>About Us</h2>
      <p>We love pets and want to help you find your perfect companion!</p>
      <h2>Donate</h2>
      <p>Your donations help us care for animals in need.</p>
    </div>
  );
};

export default HomePage;
