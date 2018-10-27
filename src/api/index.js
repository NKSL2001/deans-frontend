import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.timeout = 5000;

export const getCrises = () => {
  return axios.get("/crises");
};

export const userLogin = form => {
  const getCSRFToken = () => {
    const cookies = document.cookie && document.cookie.split("; ");
    let csrftoken = "";
    cookies.forEach(cookie => {
      if (cookie.slice(0, 9) === "csrftoken") {
        csrftoken = cookie.slice(10);
      }
    });
    return csrftoken;
  };
  if (form) form.append("csrfmiddlewaretoken", getCSRFToken());
  return axios.post("/rest-auth/login/", form); // it is important to keep the ending slash
};

export const getCrisisType = () => {
  return axios.get("/crisistype");
};

export const getAssistanceType = () => {
  return axios.get("/crisisassistance");
};
