import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../redux/actions';

const AnimalDetail = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAnimalDetail = async () => {
      try {
        const response = await axios.get(`http://crudapi.co.uk/api/animals/${id}`);
        setAnimal(response.data);
      } catch (error) {
        console.error('Error fetching animal details:', error);
      }
    };

    fetchAnimalDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (animal) {
      dispatch(addToCart(animal));
    }
  };

  const handleAddToWishlist = () => {
    if (animal) {
      dispatch(addToWishlist(animal));
    }
  };

  if (!animal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{animal.name}</h2>
      <p><strong>Price:</strong> ${animal.price}</p>
      <p><strong>Description:</strong> {animal.description}</p>
      <p><strong>Stock:</strong> {animal.stock} available</p>
      <label><strong>Popular:</strong> {animal.isPopular ? 'Yes' : 'No'}</label>
      <div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default AnimalDetail;
