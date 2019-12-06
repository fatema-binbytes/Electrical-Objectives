import actions from '../constant';

const initialState = {
  IsLoading: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING:
      state = Object.assign({}, state, {IsLoading: action.payload});
      break;
    default:
      break;
  }
  return state;
};

export default ui;
