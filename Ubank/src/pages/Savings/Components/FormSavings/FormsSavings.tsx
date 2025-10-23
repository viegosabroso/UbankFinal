
import UseSavings from "../../../../Hooks/Usesavings";
import "./FormSavings.css";

const FormSavings = () => {
  const {
    Savingadd,
    setGoalName,
    setCategory,
    setGoalAmount,
    setSavingFrequency,
    setSavingIndex
  } = UseSavings();

  return (
    <div className="form-savings-specific-container">
      <div className="goal-details-specific">
        <h1 className="section-title-specific">
          Goal <span className="highlight-specific">Details</span>
        </h1>
        <div className="input-group-specific">
          <h3 className="input-label-specific">Goal Name</h3>
          <input
            type="text"
            placeholder="Enter the name of your savings goal"
            className="input-field-specific"
            onChange={(e) => setGoalName(e.target.value)}
          />
        </div>
        <div className="input-group-specific">
          <h3 className="input-label-specific">Category</h3>
          <select
            name="Category"
            className="select-field-specific"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected>
              Select a category
            </option>
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
      </div>

      <div className="savings-plan-specific">
        <h1 className="section-title-specific">
          Savings <span className="highlight-specific">Plan</span>
        </h1>
        <div className="input-group-specific">
          <h3 className="input-label-specific">Amount to save</h3>
          <input
            type="number"
            placeholder="Enter the total amount you want to save"
            className="input-field-specific"
            onChange={(e) => setGoalAmount(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group-specific">
          <h3 className="input-label-specific">Savings Frequency</h3>
          <select
            name="Frequency"
            className="select-field-specific"
            onChange={(e) => setSavingFrequency(e.target.value)}
          >
            <option value="" disabled selected>
              Select a frequency
            </option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="form-savings-buttons-specific">
        <button
          type="button"
          className="cancel-button-specific"
          onClick={() => {
            console.log("Cancel clicked");
            setSavingIndex(3)
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="create-button-specific"
          onClick={() => Savingadd()}
        >
          Create Goal
        </button>
      </div>
    </div>
  );
};

export default FormSavings;