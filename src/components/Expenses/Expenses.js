import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import "./ExpensesFilter";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import PropTypes from "prop-types";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");
	function filterChangeHandler(selectedYear) {
		setFilteredYear(selectedYear);
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card>
				<ExpensesFilter
					selectedYear={filteredYear}
					onFilterChange={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
}

Expenses.propTypes = {
	items: PropTypes.array
};

export default Expenses;
