import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import PropTypes from "prop-types";

function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);

	function saveExpenseDataHandler(enteredExpenseData) {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	}

	function startEditingHandler() {
		setIsEditing(true);
	}

	function stopEditingHandler() {
		setIsEditing(false);
	}

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
}

NewExpense.propTypes = {
	onAddExpense: PropTypes.func
};

export default NewExpense;
