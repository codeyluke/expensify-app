import { createStore } from "redux";

const incrementCount = (payload = {}) => {
  const { incrementBy } = payload;
  return {
    type: "INCREMENT",
    incrementBy: typeof incrementBy === "number" ? incrementBy : 1,
  };
};

const decrementCount = (payload = {}) => {
  const { decrementBy } = payload;
  return {
    type: "DECREMENT",
    decrementBy: typeof decrementBy === "number" ? decrementBy : 1,
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

const setCount = (payload = {}) => {
  const { setAt } = payload;
  return {
    type: "SET",
    setAt: typeof setAt === "number" ? setAt : 0,
  };
};

// Reducers

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };

    case "SET":
      return {
        count: action.setAt,
      };

    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 8 }));

store.dispatch(resetCount());

store.dispatch(setCount({ setAt: 20 }));
