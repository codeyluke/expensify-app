import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
  const { expenses, filters } = props;
  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map((expense, index) => {
          return <ExpenseListItem key={index} expense={expense} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { expenses, filters } = state;
  return {
    expenses: selectExpenses(expenses, filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
