import {
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
