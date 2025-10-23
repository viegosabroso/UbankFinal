
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <div className="headerContainer">
      <img 
        src="" 
        alt="Profile" 
        className="profileImage" 
      />
      <button className="connectButton">Profile Image</button>
      <button className="editButton">Edit</button>
    </div>
  );
};

export default ProfileHeader;