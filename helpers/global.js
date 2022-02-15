import Axios from "axios";

export const BASE_URL = "http://localhost:9000/v1";

export const axiosGeneral = Axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});

export const errorHandler = (error) => {
  return error.response !== undefined
    ? `Response ${error.response.status}: ${error.response.data.message}`
    : error.message;
};
