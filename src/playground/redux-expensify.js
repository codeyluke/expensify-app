import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ACTION
const addExpense = ({
  description = "",
  notes = "",
  createdAt = 0,
  amount = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      notes,
      createdAt,
      amount,
    },
  };
};

const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

const setTextFilter = (textValue = "") => {
  return {
    type: "SET_TEXT_FILTER",
    textValue,
  };
};

const setSortByAmount = () => {
  return {
    type: "SET_SORT_BY_AMOUNT",
  };
};

const setSortByDate = () => {
  return {
    type: "SET_SORT_BY_DATE",
  };
};

const setStartDate = (startDate = undefined) => {
  return {
    type: "SET_START_DATE",
    startDate,
  };
};

const setEndDate = (endDate = undefined) => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};

// DEFAULT STATES
const expensesReducerDefaultState = [];

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

// REDUCERS
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.textValue,
      };
    case "SET_SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount > b.amount ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("visibleExpense", visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 1200, createdAt: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 212, createdAt: 200 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));

store.dispatch(setSortByAmount());

// store.dispatch(setSortByDate());

// store.dispatch(setStartDate(100));
// store.dispatch(setEndDate(225));

const demoState = {
  expenses: [
    {
      id: "ssnoindois",
      description: "fuck you",
      notes: "this is for your ass",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
