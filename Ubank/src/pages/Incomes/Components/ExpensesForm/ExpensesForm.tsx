import React, { useState } from "react";
import "./ExpensesForm.css"

interface ExpenseFormProps {
  onSubmit: (data: { ExpensesName: string; ExpensesAmount: number; ExpensesDate: string; ExpensesCategory: string }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [ExpensesName, setExpenseName] = useState("");
  const [ExpensesAmount, setAmount] = useState<number>(0);
  const [ExpensesDate, setDate] = useState("");
  const [ExpensesCategory, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ExpensesName, ExpensesAmount, ExpensesDate, ExpensesCategory });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="expenseName">Expense Name:</label>
        <input
          type="text"
          id="expenseName"
          value={ExpensesName}
          onChange={(e) => setExpenseName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={ExpensesAmount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={ExpensesDate}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-expenses-category">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={ExpensesCategory}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Rent or Housing">Rent or Housing</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Sports">Sports</option>
          <option value="Clothing">Clothing</option>
          <option value="Technology">Technology</option>
          <option value="Social Events">Social Events</option>
          <option value="Other Expenses">Other Expenses</option>
        </select>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};


export default ExpenseForm;