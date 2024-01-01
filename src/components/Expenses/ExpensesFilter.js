import React from "react";

import "./ExpensesFilter.css";
import PropTypes from "prop-types";

const ExpensesFilter = (props) => {
	function filterChangeHandler(event) {
		props.onFilterChange(event.target.value);
	}

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select
					value={props.selectedYear}
					onChange={filterChangeHandler}
				>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

ExpensesFilter.propTypes = {
	selectedYear: PropTypes.string,
	onFilterChange: PropTypes.func
};

export default ExpensesFilter;
