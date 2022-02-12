import axios from "axios";
const accessToken = localStorage.getItem("accessToken");
const instant = axios.create({
  baseurl: "http://localhost:5000/api/",
  headers: { " authoraization": accessToken }
});

export default instant;
