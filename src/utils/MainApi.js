const headers = {
  "Content-Type": "application/json",
};

const BASE_URL = "http://localhost:3000";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

export const updateUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then(checkResponse);
};
