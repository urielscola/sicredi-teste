const mockuser = 'dragon999';
const mockpass = 'south';

export default {
  login: ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === mockuser && password === mockpass) {
          return resolve();
        }
        return reject(new Error('Login inválido.'));
      }, 1500);
    });
  }
};
