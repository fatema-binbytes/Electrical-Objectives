import actions from '../constant';
import ui from './ui';
import DataHelper from '../../utils/data';
import constants from '../../config/constants';

const getCategories = () => {
  return dispatch => {
    dispatch(ui.loading(true));
    DataHelper.get(`${constants.API_URL}/categories`, null, json => {
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

const loadQuestion = (isBookmark, question_no, category_id) => {
  return (dispatch, getState) => {
    dispatch(ui.loading(true));
    const info = getState().user.info;
    if (isBookmark) {
      DataHelper.get(
        `${constants.API_URL}/bookmark/${question_no}`,
        `Bearer ${info.api_token}`,
        json => {
          if (json.success) {
            dispatch({
              type: actions.GET_QUESTION_DATA,
              payload: json.data,
            });
            dispatch(ui.loading(false));
          }
        },
      );
    } else {
      if (info) {
        DataHelper.get(
          `${constants.API_URL}/question/${category_id}/${question_no}`,
          `Bearer ${info.api_token}`,
          json => {
            if (json.success) {
              dispatch({
                type: actions.GET_QUESTION_DATA,
                payload: json.data,
              });
              dispatch(ui.loading(false));
            }
          },
        );
      } else {
        DataHelper.get(
          `${constants.API_URL}/question/${category_id}/${question_no}`,
          null,
          json => {
            if (json.success) {
              dispatch({
                type: actions.GET_QUESTION_DATA,
                payload: json.data,
              });
              dispatch(ui.loading(false));
            }
          },
        );
      }
    }
  };
};

const favorite = id => {
  return (dispatch, getState) => {
    dispatch(ui.loading(true));
    const info = getState().info;
    if (info) {
      const body = {
        question_id: id,
      };
      DataHelper.post(body, info, json => {
        if (json.success) {
          console.log(json);
          // dispatch({
          //   type: actions.GET_FAVORITE_DATA,
          //   payload: json.data,
          // });
          dispatch(ui.loading(false));
        }
      });
    }
  };
};

export default {
  loadQuestion,
  favorite,
  getCategories,
};
