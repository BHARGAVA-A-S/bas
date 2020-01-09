import {API_DATA} from '../constants';

const initialState = {
  data: '',
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_DATA:
      console.log(data, 'red');
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
