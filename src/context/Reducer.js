export const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      const isExisted = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (isExisted) {
        return { ...state, ...action.payload };
      } else {
        return {
          ...state,
          carts: [...state.carts, { ...action.payload }],
        };
      }
    case "REMOVE_CART":
      return { ...state, carts: action.payload };
    case "REMOVE_ALL":
      return { ...state, carts: [] };
    default:
      return state;
  }
};
