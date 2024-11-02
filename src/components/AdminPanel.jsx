import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimals, setCategories } from '../redux/actions';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const animals = useSelector(state => state.animals);
  const categories = useSelector(state => state.categories);

  const [newAnimal, setNewAnimal] = useState({ name: '', price: '', description: '', isPopular: false, stock: 0 });
  const [newCategory, setNewCategory] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchData = async () => {
      const animalResponse = await axios.get('http://crudapi.co.uk/api/animals');
      const categoryResponse = await axios.get('http://crudapi.co.uk/api/categories');
      dispatch(setAnimals(animalResponse.data));
      dispatch(setCategories(categoryResponse.data));
    };

    fetchData();
  }, [dispatch]);

  const handleAnimalSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://crudapi.co.uk/api/animals', newAnimal);
    setNewAnimal({ name: '', price: '', description: '', isPopular: false, stock: 0 });
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://crudapi.co.uk/api/categories', newCategory);
    setNewCategory({ title: '', description: '' });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleAnimalSubmit}>
        <input type="text" placeholder="Name" value={newAnimal.name} onChange={e => setNewAnimal({ ...newAnimal, name: e.target.value })} />
        <input type="number" placeholder="Price" value={newAnimal.price} onChange={e => setNewAnimal({ ...newAnimal, price: e.target.value })} />
        <textarea placeholder="Description" value={newAnimal.description} onChange={e => setNewAnimal({ ...newAnimal, description: e.target.value })} />
        <label>
          Popular:
          <input type="checkbox" checked={newAnimal.isPopular} onChange={e => setNewAnimal({ ...newAnimal, isPopular: e.target.checked })} />
        </label>
        <input type="number" placeholder="Stock" value={newAnimal.stock} onChange={e => setNewAnimal({ ...newAnimal, stock: e.target.value })} />
        <button type="submit">Add Animal</button>
      </form>
      <form onSubmit={handleCategorySubmit}>
        <input type="text" placeholder="Category Title" value={newCategory.title} onChange={e => setNewCategory({ ...newCategory, title: e.target.value })} />
        <textarea placeholder="Description" value={newCategory.description} onChange={e => setNewCategory({ ...newCategory, description: e.target.value })} />
        <button type="submit">Add Category</button>
      </form>
      <h3>Animals</h3>
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>{animal.name} - {animal.price} - {animal.description}</li>
        ))}
      </ul>
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
