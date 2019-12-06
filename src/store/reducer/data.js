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
      const replaceJson = JSON.stringify(action.payload).replace(
        /(?:\\[rnt]|[\r\n\t]+)+/g,
        '',
      );
      state = Object.assign({}, state, {question: JSON.parse(replaceJson)});
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
