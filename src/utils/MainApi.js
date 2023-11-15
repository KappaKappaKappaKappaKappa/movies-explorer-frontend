import { SERVER_URL, HOST_URL } from "./contains";

const headers = {
  "Content-Type": "application/json",
};

const BASE_URL = HOST_URL;
// const BASE_URL = SERVER_URL;

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const updateUserInfo = (data, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then(checkResponse);
};

export const saveMovie = (movie, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...movie,
    }),
  }).then(checkResponse);
};

export const deleteMovie = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
