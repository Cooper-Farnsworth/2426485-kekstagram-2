import { GET_EP, POST_EP, SERVER_URL } from './constants.js';

export const getData = () => fetch(`${SERVER_URL}${GET_EP}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

export const postData = (body) => fetch(`${SERVER_URL}${POST_EP}`, {
  method: 'post',
  body
});
