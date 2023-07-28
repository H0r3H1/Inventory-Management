import { createStore, combineReducers } from 'redux';

// Reducer for login-related state
const loginReducer = (state = { email: '', pass: '', name: '' }, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASS':
      return { ...state, pass: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer);

export default store;