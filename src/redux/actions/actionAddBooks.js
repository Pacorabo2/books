import { ADD_BOOKS } from '../constants';

const addBook = data => {
  return {
    type: ADD_BOOKS,
    payload: data /** Object */
  }
};


