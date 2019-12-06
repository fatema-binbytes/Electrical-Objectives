import actions from '../constant';

const init = {
  info: null,
};
const reducer = (state = init, action) => {
  switch (action.type) {
    case actions.CHECK_LOGIN:
      state = Object.assign({}, state, {info: action.payload});
    default:
      break;
  }
  return state;
};
export default reducer;
