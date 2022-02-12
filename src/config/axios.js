import axios from "axios";
const authToken = localStorage.getItem("accessToken");
const instance = axios.create({
  baseurl: "http://localhost:5000/api/",
  headers: { Authorization: authToken }
});

export default instance;
