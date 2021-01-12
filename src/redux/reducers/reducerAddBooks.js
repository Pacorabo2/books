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
const reducerAddBooks = (state = inistialState.books, action) => {
  
  if (localStorage.getItem('booksData')) {
    state = JSON.parse(localStorage.getItem('booksData'))
  }

  switch (action.type) {
    case ADD_BOOKS:
      state = [...state, helperAddData(action)]
      localStorage.setItem('booksData', JSON.stringify(state))
      return state;
  
    default: return state
  }
}

export default reducerAddBooks; 