import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    const { expense } = props;
    this.state = {
      description: expense ? expense.description : "",
      notes: expense ? expense.notes : "",
      amount: expense ? expense.amount / 100 : "",
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description,
      };
    });
  };

  onNoteChange = (e) => {
    const notes = e.target.value;
    this.setState(() => {
      return {
        notes,
      };
    });
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount,
        };
      });
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => {
        return {
          createdAt,
        };
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        calendarFocused: focused,
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      const error = "Please provide desription and amount";
      this.setState(() => {
        return {
          error,
        };
      });
    } else {
      this.setState(() => {
        return {
          error: "",
        };
      });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        notes: this.state.notes,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };

  render() {
    console.log("state", this.state);
    const {
      description,
      notes,
      amount,
      createdAt,
      calendarFocused,
      error,
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            cols="30"
            rows="10"
            value={notes}
            placeholder="add a note for your expense (optional)"
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
