import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filtereChangeHanlder = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No Expenses Found</p>;
  if (filteredExpenses.length === 1) {
    expenseContent = "Only single Expense here. Please add more...";
  } else if (filteredExpenses.length > 1) {
    expenseContent = filteredExpenses.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filtereChangeHanlder}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      {expenseContent}
    </Card>
  );
};

export default Expenses;
