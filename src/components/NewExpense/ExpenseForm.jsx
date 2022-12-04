import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const { onSaveExpenseData, onCancel } = props;

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function resetHandler() {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    onCancel();
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            name="title"
            id="text"
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enteredAmount}
            min="0.01"
            step="0.01"
            name="Amount"
            id="Amount"
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={enteredDate}
            min="2019-01-01"
            max="2025-12-31"
            name="date"
            id="date"
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
}
