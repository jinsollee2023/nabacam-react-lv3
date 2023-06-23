const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_PRICE = "CHANGE_PRICE";

export const changeName = (payload) => {
  return { type: CHANGE_NAME, payload };
};

export const changePrice = (payload) => {
  return { type: CHANGE_PRICE, payload };
};

const initialState = { name: "", price: 0 };

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_PRICE:
      return { ...state, price: action.payload };
    default:
      return state;
  }
};

export default inputReducer;
