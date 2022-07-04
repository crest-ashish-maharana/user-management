import { FETCH_USER_DATA, FETCH_USER_FAILED, FETCH_USER_SUCCESS } from '../actions/actiontypes';

const initialState = {
  users: [],
  loading: true,
  success: false
}


export default function userReducer(state = initialState, action) {
  switch (action.type) {
      case FETCH_USER_DATA:
        state.users = [];
        state.loading = true;
        state.success = false;
      return state;

      case FETCH_USER_SUCCESS:
        console.log("Reducer Data=>\n", action.payload);
        state.users = action.payload;
        state.loading = false;
        state.success = true;
      return state;

      case FETCH_USER_FAILED:
        state.users = [];
        state.loading = false;
        state.success = false;
      return state;

    default:
      return state;
  }
}