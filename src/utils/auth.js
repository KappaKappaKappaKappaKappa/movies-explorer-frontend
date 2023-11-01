export const BASE_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const handleLoginUser = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};

export const handleRegisterUser = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, email, password }),
  }).then((res) => checkResponse(res));
};

export const updateToken = (token) => {
  headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
};
