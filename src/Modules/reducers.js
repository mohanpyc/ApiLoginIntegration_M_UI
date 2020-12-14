import { combineReducers } from "redux";
import { userLoginReducer } from "./reducers/userReducers";
import { inventoryReducer } from "./reducers/inventoryReducer";
import { totalInfoReducers } from './reducers/totalCarrotsAndQuantityReducers'

let localUserInfo = localStorage.getItem("loginInfo");
localUserInfo = JSON.stringify(localUserInfo);

export const initialState = {
  userInfo: { ...localUserInfo.data },
  inventoryInfo: {},
  totalInfoReducers: {}
};

export const reducer = combineReducers({
  userInfo: userLoginReducer,
  inventoryInfo: inventoryReducer,
  totalInfoReducers: totalInfoReducers
});
