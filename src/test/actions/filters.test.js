import {
  setTextFilter,
  setSortByAmount,
  setSortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filters";
import moment from "moment";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate set text filter object with text value", () => {
  const action = setTextFilter("rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    textValue: "rent",
  });
});

test("should generate set text filter with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    textValue: "",
  });
});

test("should generate action object for sort by date", () => {
  const action = setSortByDate();
  expect(action).toEqual({
    type: "SET_SORT_BY_DATE",
  });
});

test("should generate action object for sort by amount", () => {
  const action = setSortByAmount();
  expect(action).toEqual({
    type: "SET_SORT_BY_AMOUNT",
  });
});
