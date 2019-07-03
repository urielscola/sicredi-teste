const BASE_API_URL = process.env.REACT_APP_API_URL;

export default ({ instance, config, resourceName }) => ({
  list: data => {
    const { headers } = config();

    return instance({
      method: 'GET',
      url: `${BASE_API_URL}${resourceName}`,
      headers
    });
  },
  get: ({ id }) => {
    const { headers } = config();

    return instance({
      method: 'GET',
      url: `${BASE_API_URL}${resourceName}/${id}`,
      headers
    });
  },
  post: data => {
    const { headers } = config();

    return instance({
      method: 'POST',
      url: `${BASE_API_URL}${resourceName}`,
      headers,
      data
    });
  },
  put: (data, id) => {
    const { headers } = config();

    return instance({
      method: 'PUT',
      url: `${BASE_API_URL}${resourceName}/${id}`,
      headers,
      data
    });
  }
});
