import {API_DATA} from '../constants';

export const getData = data => {
  console.log(data, 'data');
  return {
    type: API_DATA,
    payload: data,
  };
};
