const tokenKey = "jwt";

export const getToken = () => {
  return localStorage.getItem(tokenKey);
};

export const saveToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

export const remoteToken = () => {
  localStorage.removeItem(tokenKey);
};
