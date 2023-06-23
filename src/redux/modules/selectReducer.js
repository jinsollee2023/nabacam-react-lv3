const OPEN_SELECT1 = "OPEN_SELECT1";
const OPEN_SELECT2 = "OPEN_SELECT2";
const CHANGE_CONTENT1 = "CHANGE_CONTENT1";
const CHANGE_CONTENT2 = "CHANGE_CONTENT2";

export const openSelect1 = (payload) => {
  return {
    type: OPEN_SELECT1,
    payload,
  };
};

export const openSelect2 = (payload) => {
  return {
    type: OPEN_SELECT2,
    payload,
  };
};

export const changeContent1 = (payload) => {
  return {
    type: CHANGE_CONTENT1,
    payload,
  };
};

export const changeContent2 = (payload) => {
  return {
    type: CHANGE_CONTENT2,
    payload,
  };
};

const initialState = {
  select1: false,
  select2: false,
  content1: "리액트",
  content2: "리액트",
};

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SELECT1:
      return { ...state, select1: action.payload };
    case OPEN_SELECT2:
      return { ...state, select2: action.payload };
    case CHANGE_CONTENT1:
      return { ...state, content1: action.payload };
    case CHANGE_CONTENT2:
      return { ...state, content2: action.payload };
    default:
      return state;
  }
};

export default selectReducer;
