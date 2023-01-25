import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-7f32.onrender.com",
});
