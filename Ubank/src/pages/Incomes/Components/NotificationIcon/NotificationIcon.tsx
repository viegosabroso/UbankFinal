
import './NotificationIcon.css';

interface NotificationIconProps {
    hasNotification: boolean; // Prop para indicar si hay una notificación o nonas
    iconSrc: string; // PNG personalizado de la campanita
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ hasNotification, iconSrc }) => (
    <div className="notification-icon">
        <img src={iconSrc} alt="Notification Icon" className="notification-image" />
        {hasNotification && <span className="notification-dot"></span>}
    </div>
);

export default NotificationIcon;
