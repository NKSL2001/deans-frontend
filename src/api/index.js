import axios from "axios";
import coreapi from "coreapi";

axios.defaults.baseURL = "http://localhost:8000/api";

export const getCrises = () => {
  return axios.get("/crises");
};

export const userLogin = () => {
  let auth = new coreapi.auth.BasicAuthentication({
    username: "admin",
    password: "abc!!!123"
  });
  const client = new coreapi.Client({ auth: auth });
  console.log("Client", client);
};
