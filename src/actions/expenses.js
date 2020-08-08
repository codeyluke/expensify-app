import uuid from "uuid";

export const addExpense = ({
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

export const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};
