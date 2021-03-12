import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  (req) => {
    if (axios.defaults.headers.common['Authorization']) return req;
    throw { message: 'the token is not available' };
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const fallbackValue = [
      {
        userId: 'Not authorized',
        id: 'aerw15311sq',
        title: 'Please try     again',
        completed: false,
      },
    ];
    return Promise.reject(fallbackValue);
  }
);

export default instance;
