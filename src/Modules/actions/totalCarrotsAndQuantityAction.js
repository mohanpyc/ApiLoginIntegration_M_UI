import { TOTAL_CARROTS_QUANTITY } from "../constants/constants";
import axios from "axios";

export const totalInfo = (pageNum=1,limit) => async (dispatch, getState) => {
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
    dispatch({ type: TOTAL_CARROTS_QUANTITY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
