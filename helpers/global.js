import Axios from "axios";

export const BASE_URL = "https://localhost/v1";

export const axiosGeneral = Axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});
