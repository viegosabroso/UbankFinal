
import './ProfileForm.css';

const ProfileForm = () => {
  return (
    <form className="formContainer">
      <div className="formGroup">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" />
      </div>
      <div className="formGroup">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" />
      </div>
      <div className="formGroup">
        <label htmlFor="timeZone">Time Zone</label>
        <select id="timeZone">
          <option value="">Select Time Zone</option>
        </select>
      </div>
      <div className="formGroup">
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />
      </div>
    </form>
  );
};

export default ProfileForm;
