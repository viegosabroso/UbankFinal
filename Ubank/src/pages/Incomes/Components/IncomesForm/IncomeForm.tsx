import React, { useState } from "react";
import "./IncomeForm.css"

interface IncomeFormProps {
  onSubmit: (data: IncomeFormData) => void;
}

interface IncomeFormData {
  incomeName: string;
  amount: number;
  date: string;
}

const IncomeForm: React.FC<IncomeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<IncomeFormData>({
    incomeName: "",
    amount: 0,
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="income-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="incomeName">Name</label>
        <input
          type="text"
          id="incomeName"
          name="incomeName"
          value={formData.incomeName}
          onChange={handleChange}
          required
          placeholder="Enter the name of your income"
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default IncomeForm;