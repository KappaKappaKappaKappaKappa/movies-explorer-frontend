const token = "jwt";

export const getToken = () => {
  return localStorage.getItem(token);
};

export const saveToken = () => {
  localStorage.setItem(token);
};

export const remoteToken = () => {
  localStorage.removeItem(token);
};
