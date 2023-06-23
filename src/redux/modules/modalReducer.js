const OPEN_MODAL1 = "OPEN_MODAL1";
const OPEN_MODAL2 = "OPEN_MODAL2";

export const openModal1 = (payload) => {
  return {
    type: OPEN_MODAL1,
    payload,
  };
};

export const openModal2 = (payload) => {
  return {
    type: OPEN_MODAL2,
    payload,
  };
};

const initialState = { modal1: false, modal2: false };

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL1:
      return { ...state, modal1: action.payload };
    case OPEN_MODAL2:
      return { ...state, modal2: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
