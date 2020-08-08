import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
// import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   // console.log("visibleExpense", visibleExpenses);
// });

// store.dispatch(addExpense({ description: "water bill", amount: 240 }));
store.dispatch(addExpense({ description: "gas bill", amount: 100 }));
store.dispatch(
  addExpense({ description: "rent", amount: 10950, createdAt: 1000 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
