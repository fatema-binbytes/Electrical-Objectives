import actions from '../constant';
import ui from './ui';
import constants from '../../config/constants';
import DataHelper from '../../utils/data';

const checkLogin = () => {
  return dispatch => {
    dispatch(ui.loading(true));
    const info = DataHelper.load(constants.KEY_AUTH);
    if (info) {
      dispatch({
        type: actions.CHECK_LOGIN,
        payload: JSON.parse(info),
      });
    }
  };
};

export default {
  checkLogin,
};
