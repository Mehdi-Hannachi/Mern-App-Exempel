import {
  SIGN_IN,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "../actionstypes/authTypes";
import axios from "axios";

export const signUp = (newUser) => async (dispatch) => {
  dispatch({ type: SIGN_UP });

  try {
    const response = await axios.post("/user/register", newUser);

    dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILED, payload: error.response.data });
  }
};
export const signIn = (userCred) => async (dispatch) => {
  dispatch({ type: SIGN_IN });

  try {
    const response = await axios.post("/user/login", userCred);

    localStorage.setItem("token", response.data.token);

    dispatch({ type: SIGN_IN_SUCCESS, payload: response.data.token });
  } catch (error) {
    dispatch({ type: SIGN_IN_FAILED, payload: error.response.data });
  }
};
