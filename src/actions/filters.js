export const setTextFilter = (textValue = "") => {
  return {
    type: "SET_TEXT_FILTER",
    textValue,
  };
};

export const setSortByAmount = () => {
  return {
    type: "SET_SORT_BY_AMOUNT",
  };
};

export const setSortByDate = () => {
  return {
    type: "SET_SORT_BY_DATE",
  };
};

export const setStartDate = (startDate = undefined) => {
  return {
    type: "SET_START_DATE",
    startDate,
  };
};

export const setEndDate = (endDate = undefined) => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};
