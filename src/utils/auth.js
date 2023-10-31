export const BASE_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
};

const checkResponse = (res) => {
  res.ok
    ? res.json()
    : Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));
};

export const handleLoginUser = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return await checkResponse(res);
  } catch (error) {
    throw error;
  }
};

export const handleRegisterUser = async (name, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    return await checkResponse(res);
  } catch (error) {
    throw error;
  }
};
