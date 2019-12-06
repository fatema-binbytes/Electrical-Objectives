import {AsyncStorage} from 'react-native';
import {GET, POST} from '../utils/api';
import constants from '../config/constants';

class DataHelper {
  async save(key, data) {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  async load(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        console.log(value);
        return value;
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
    return false;
  }

  async delete(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  get(url, api_token, callback) {
    return GET(url, api_token, null, json => {
      callback(json);
    });
  }

  post(body, info, callback) {
    POST(
      `${constants.API_URL}/bookmark`,
      body,
      `Bearer ${info.api_token}`,
      null,
      json => {
        callback(json);
      },
    );
  }
}

export default new DataHelper();
