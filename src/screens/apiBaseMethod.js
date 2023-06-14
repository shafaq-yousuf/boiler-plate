import axios from "axios";

let apiHandle = axios.create({
  baseURL: "https://fakestoreapi.com",
});

let Get = (endPoint) => {
  return apiHandle.get(endPoint);
};
export default Get;