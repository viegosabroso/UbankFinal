
import './UserCard.css';

interface UserCardProps {
    name: string;
    email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
    return (
        <div className="user-card">
            <h3 className="user-name">{name}</h3>
            <p className="user-email">{email}</p>
        </div>
    );
};

export default UserCard;
