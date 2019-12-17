import actions from '../constant';
import ui from './ui';
import {GET, POST} from '../../utils/api';
import constants from '../../config/constants';
import route from '../../utils/route';

const getCategories = () => {
  return dispatch => {
    dispatch(ui.loading(true));
    GET(`${constants.API_URL}/categories`, null, null, json => {
      if (json.success) {
        dispatch({
          type: actions.GET_CATEGORY,
          payload: json.data,
        });
        dispatch(ui.loading(false));
      }
    });
  };
};

const loadQuestion = (isBookmark, question_no, category_id, navigation) => {
  return (dispatch, getState) => {
    dispatch(ui.loading(true));
    const info = getState().user.info;
    const url = isBookmark
      ? `${constants.API_URL}/bookmark/${question_no}`
      : `${constants.API_URL}/question/${category_id}/${question_no}`;
    const api_token = info ? `Bearer ${info.api_token}` : null;
    GET(url, api_token, null, json => {
      if (json.success) {
        if (json.data !== null) {
          const replaceJson = JSON.stringify(json.data).replace(
            /(?:\\[rnt]|[\r\n\t]+)+/g,
            '',
          );
          dispatch({
            type: actions.GET_QUESTION_DATA,
            payload: JSON.parse(replaceJson),
          });
          dispatch(ui.loading(false));
        } else {
          route.back(navigation);
        }
      }
    });
  };
};

const favorite = id => {
  return (dispatch, getState) => {
    const info = getState().user.info;
    const body = {
      question_id: id,
    };
    POST(
      `${constants.API_URL}/bookmark`,
      body,
      `Bearer ${info.api_token}`,
      null,
      json => {
        if (json.success) {
          const questionData = getState().questionData.question;
          const data = {
            category_id: questionData.category_id,
            correct_opt: questionData.correct_opt,
            created: questionData.created,
            favorite: !questionData.favorite,
            id: questionData.id,
            method: questionData.method,
            opt1: questionData.opt1,
            opt2: questionData.opt2,
            opt3: questionData.opt3,
            opt4: questionData.opt4,
            query: questionData.query,
            question: questionData.question,
            question_no: questionData.question_no,
          };
          dispatch({
            type: actions.GET_FAVORITE_DATA,
            payload: data,
          });
        }
      },
    );
  };
};

export default {
  loadQuestion,
  favorite,
  getCategories,
};
