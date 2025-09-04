import axios from "axios";

const BASE_URL =
  "https://blogy-07-default-rtdb.asia-southeast1.firebasedatabase.app/blogy";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
