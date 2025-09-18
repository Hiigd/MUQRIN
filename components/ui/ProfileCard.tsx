import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  description: string;
  status: string;
  contactText: string;
  onContactClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  description,
  status,
  contactText,
  onContactClick,
}) => {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="profile-card-avatar" />
      <h2 className="profile-card-name">{name}</h2>
      <h3 className="profile-card-title">{title}</h3>
      <p className="profile-card-description">{description}</p>
      <p className="profile-card-status">{status}</p>
      <button onClick={onContactClick} className="profile-card-button">
        {contactText}
      </button>
    </div>
  );
};

export default ProfileCard;
