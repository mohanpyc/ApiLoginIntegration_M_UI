import { INVENTORY_DATA, INVENTORY_DATA_CLEAR } from "../constants/constants";

export const inventoryReducer = (state = {}, action) => {
  console.log(action.payload,"inventour reducer")
  switch (action.type) {
    case INVENTORY_DATA:
      console.log("invetoru,Red")
      return { inventory: action.payload };
    case INVENTORY_DATA_CLEAR:
        return {inventory: {}}
    default:
      return state;
  }
};
