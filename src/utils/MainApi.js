const headers = {
  "Content-Type": "application/json",
};

const BASE_URL = "http://localhost:3000";

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers,
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  }).then((res) => {
    checkServerResponse(res);
  });
};
