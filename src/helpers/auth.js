import Storage from './storage';

const MOCK_AUTH_TOKEN = process.env.REACT_APP_EXAMPLE_AUTH_TOKEN;
const tokenKey = 'token';
const userKey = 'user';

export const tokenIsValid = token => {
  return MOCK_AUTH_TOKEN === token;
};

export const getSession = () => {
  return { token: Storage.getItem(tokenKey), user: Storage.getItem(userKey) };
};

export const isAuthenticated = () => {
  const { token, user } = getSession();
  if (!token || !user) return false;
  return tokenIsValid(token);
};

export const setSession = user => {
  Storage.setItem(tokenKey, MOCK_AUTH_TOKEN);
  Storage.setItem(userKey, user);
};

export const clearSession = () => {
  Storage.removeItem(tokenKey);
  Storage.removeItem(userKey);
};
