// index.js

import { FETCH_USER_DATA, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './actiontypes';
import axios from 'axios';

export const fetchData = () => {
    return {
        type: FETCH_USER_DATA
    }
};

export const fetchDataSuccess = (payload) => {
    return {
      type: FETCH_USER_SUCCESS,
      payload
    }
};

export const fetchDataFailed = () => {
    return {
      type: FETCH_USER_FAILED
    }
};

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
          const response = await axios.get('http://192.168.29.225:3001/users');
          console.log("Action Data=>\n", response)
          dispatch(fetchDataSuccess(response.data.users[0]));
      } catch (error) {
          dispatch(fetchDataFailed());
      }
  };
};