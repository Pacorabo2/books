import { ADD_BOOKS } from '../constants';
import { v4 as uuiv4 } from 'uuid';

const inistialState = {
  books:[]
};

const helperAddData = action => {
  return {
    id: uuiv4(), // package used automaticly create id
    title: action.payload.title,
    author: action.payload.author
  }
}


// Reducer
const booksReducer = (state = inistialState.books, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      state = [...state, helperAddData(action)]
      return state;
  
    default:
      break;
  }
}

export default reducerAddBooks; 