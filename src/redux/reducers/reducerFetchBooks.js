import {FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR} from '../constants';

const initialState = {
  isLoading: false,
  fetchedBooks: [],
  error: ''
}

// Reducer
const reducerFetchedBooks = (state= initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return {
        ...state,
        isLoading: true,
      }
  
    default: return state
  }
}

export default reducerFetchedBooks;