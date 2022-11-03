import axios from "axios";

export const api = axios.create({
  baseURL: "https://cg-food-explorer.herokuapp.com/",
});
