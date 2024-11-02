import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist, addToCart } from '../redux/actions';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleMoveToCart = (animal) => {
    dispatch(addToCart(animal));
    handleRemove(animal.id);
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishlist.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleMoveToCart(item)}>Move to Cart</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
