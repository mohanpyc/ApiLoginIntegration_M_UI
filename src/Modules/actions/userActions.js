import {
    LOGIN
} from "../constants/constants";
import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN });

    const config = {
      headers: {
        "Content-Type": "application/json",
        type: "Web",
      },
    };
    const { data } = await axios.post(
      "https://d.jeweltrace.in/login/",
      { username, password },
      config
    );

    dispatch({
      type: LOGIN,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error)
  }
};

