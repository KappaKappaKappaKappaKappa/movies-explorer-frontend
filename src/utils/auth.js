export const BASE_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
};

const checkResponse = (res) => {
  res.ok
    ? res.json()
    : Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));
};

export const handleLoginUser = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    checkResponse(res);
  });
};

export const handleRegisterUser = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  }).then(checkResponse);
};

export const updateToken = (token) => {
  headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
};
