import axios from 'axios';

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000,
      });
}

const GetApiDetails = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return AxiosRequest('http://localhost:3000/details', 'GET', headers, {});
};

const PostApiDetails = (request) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  return AxiosRequest(
    'http://localhost:3000/details',
    'POST',
    headers,
    request
  );
};

export { GetApiDetails, PostApiDetails };
