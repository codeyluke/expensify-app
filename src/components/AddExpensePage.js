import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => {
  const { dispatch } = props;

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
