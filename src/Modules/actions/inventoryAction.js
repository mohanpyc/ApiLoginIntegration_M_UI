import { INVENTORY_DATA, INVENTORY_DATA_CLEAR } from "../constants/constants";
import axios from "axios";

export const inventory = (pageNum = 1, limit = 10) => async (
  dispatch,
  getState
) => {
  try {
    const {
      userInfo: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-web-token": userInfo.data.web_token[0],
      },
    };
    const { data } = await axios.get(
      `https://d.jeweltrace.in/sku?id=5cfe1974a24ac0157013f843&rootInfo=company&page_no=${pageNum}&limit=${limit}`,
      config
    );
    console.log(data)
    dispatch({ type: INVENTORY_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const inventoryUnmount = () => {
  return {
    type: INVENTORY_DATA_CLEAR,
  };
};
