import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => {
  const { id, description, amount, createdAt } = props.expense;
  return (
    <div>
      <Link to={`/edit/${id}`}>{description}</Link>
      <p>
        {amount} - {createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem;
