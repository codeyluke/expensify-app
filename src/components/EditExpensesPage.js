import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
  const { expense, dispatch } = props;

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
        expense={expense}
      />
      <button
        onClick={() => {
          dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
