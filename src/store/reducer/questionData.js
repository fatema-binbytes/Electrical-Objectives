import actions from '../constant';

const init = {
  category: {
    id: null,
    category_no: null,
    category_name: '',
  },
  question: {
    category_id: '',
    correct_opt: '',
    created: '',
    favorite: false,
    id: null,
    method: null,
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: '',
    query: null,
    question: '',
    question_no: '',
  },
};
const reducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_QUESTION_DATA:
      state = Object.assign({}, state, {question: action.payload});
      break;
    case actions.GET_FAVORITE_DATA:
      state = Object.assign({}, state, {question: action.payload});
      break;
    case actions.GET_CATEGORY:
      state = Object.assign({}, state, {category: action.payload});
      break;
    default:
      break;
  }
  return state;
};
export default reducer;
