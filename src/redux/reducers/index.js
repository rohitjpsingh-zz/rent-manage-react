import { combineReducers } from "redux";

import auth from "./authentication";
import alert from './alert';
import user from './user';
import contact from "./contact";
import theme from "./theme";

const appReducer = combineReducers({
  auth,
  alert,
  user,
  contact,
  theme,
})

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer;