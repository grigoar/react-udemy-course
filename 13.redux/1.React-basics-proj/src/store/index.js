// never mutate the state, return a new state
// import { createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// const INCREMENT = 'increment';

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     auth: authSlice.reducer,
//   },
// });

// this returns some unique actions (type: "some unique id for action")
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;

// -----------------------------OLDWAY REDUX-----------------------------------
// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };
// const store = createStore(counterReducer);

// export default store;
// const reduxSubscriber = () => {
//   const state = store.getState();
//   console.log(state);
// };

// store.dispatch({ type: 'increment' });

/// -------------------------------------------BASICS-------------------------------------------------
// const redux = require('redux');

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };

// const store = redux.createStore(counterReducer);

// // component
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });
