const initialState = {
    animals: [],
    categories: [],
    cart: [],
    wishlist: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ANIMALS':
        return { ...state, animals: action.payload };
      case 'SET_CATEGORIES':
        return { ...state, categories: action.payload };
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      case 'ADD_TO_WISHLIST':
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      case 'REMOVE_FROM_WISHLIST':
        return { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  