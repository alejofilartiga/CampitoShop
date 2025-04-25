import axios from "axios";
import {
  createOrderFail,
} from "../assets/components/Redux/orders/ordersSlice";
import { BASE_URL } from "../Utils/constants";

export const createOrder = async (order, dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}`, order);
      if (response) {
        console.log(response.data);
      }
    } catch (err) {
      dispatch(createOrderFail());
    }
  };