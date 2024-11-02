import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist } from '../redux/actions';

const AnimalList = () => {
  const animals = useSelector(state => state.animals);
  const dispatch = useDispatch();

  const handleAddToCart = (animal) => {
    dispatch(addToCart(animal));
  };

  const handleAddToWishlist = (animal) => {
    dispatch(addToWishlist(animal));
  };

  return (
    <div>
      <h2>Available Animals</h2>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>
            <a href={`/animal/${animal.id}`}>{animal.name} - ${animal.price}</a>
            <button onClick={() => handleAddToCart(animal)}>Add to Cart</button>
            <button onClick={() => handleAddToWishlist(animal)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
