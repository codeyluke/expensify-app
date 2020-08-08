import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  setSortByAmount,
  setSortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => {
      return {
        calendarFocused,
      };
    });
  };

  render() {
    const { filters, dispatch } = this.props;
    return (
      <div>
        <input
          type="text"
          value={filters.text}
          onChange={(e) => {
            dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={filters.sortBy}
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value === "amount") {
              dispatch(setSortByAmount());
            } else if (e.target.value === "date") {
              dispatch(setSortByDate());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
