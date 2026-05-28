// import { createStore } from "redux";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { ...state, counter: state.counter + 1 };
//   }
//   if (action.type === "increase") {
//     return { ...state, counter: state.counter + action.payload };
//   }
//   if (action.type === "decrement") {
//     return { ...state, counter: state.counter - 1 };
//   }
//   if (action.type === "toggle") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export default store;
