import { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
