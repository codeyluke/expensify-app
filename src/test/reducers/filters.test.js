import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@init" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, {
    type: "SET_SORT_BY_AMOUNT",
  });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };

  const action = { type: "SET_SORT_BY_DATE" };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const textValue = "this is my filter";
  const action = {
    type: "SET_TEXT_FILTER",
    textValue,
  };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe(textValue);
});

test("should set startDate filter", () => {
  const startDate = moment(0);
  const action = {
    type: "SET_START_DATE",
    startDate,
  };
  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("should set endDate filter", () => {
  const endDate = moment(0).valueOf();
  const action = {
    type: "SET_END_DATE",
    endDate,
  };
  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
