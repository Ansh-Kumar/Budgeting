import React from "react";

import PropTypes from "prop-types";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
			</Card>
		</li>
	);
}

ExpenseItem.propTypes = {
	date: PropTypes.instanceOf(Date),
	title: PropTypes.string,
	amount: PropTypes.number
};

export default ExpenseItem;
