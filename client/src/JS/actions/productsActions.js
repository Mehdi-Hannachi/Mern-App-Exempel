import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
} from "../actionstypes/productstypes";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS });

  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    const response = await axios.get("/product/products", config);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILED, payload: error.response.data });
  }
};
