export const setAnimals = (animals) => ({
  type: 'SET_ANIMALS',
  payload: animals,
});

export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  payload: categories,
});

export const addToCart = (animal) => ({
  type: 'ADD_TO_CART',
  payload: animal,
});

export const removeFromCart = (id) => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});

export const addToWishlist = (animal) => ({
  type: 'ADD_TO_WISHLIST',
  payload: animal,
});

export const removeFromWishlist = (id) => ({
  type: 'REMOVE_FROM_WISHLIST',
  payload: id,
});
