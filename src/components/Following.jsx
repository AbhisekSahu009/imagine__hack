import React, { useState } from 'react';
import '../App.css';

const profiles = [
    { id: 1, name: "Abhisek Sahu", location: "Bhubaneswar, Odisha", followers: "100K Followers", image: "profile1.jpg" },
    { id: 2, name: "Abhisek Bairagi", location: "Cuttack, Odisha", followers: "100K Followers", image: "profile2.jpg" },
    { id: 3, name: "Sabyasachi Patra", location: "Bhubaneswar, Odisha", followers: "5K Followers", image: "profile3.jpg" },
    { id: 4, name: "Parthak Sadhi", location: "SIT, Odisha", followers: "15K Followers", image: "profile4.jpg" },
];

const Following = () => {
    const [followStatus, setFollowStatus] = useState(
        profiles.reduce((acc, profile) => {
            acc[profile.id] = false;
            return acc;
        }, {})
    );

    const toggleFollow = (id) => {
        setFollowStatus((prevStatus) => ({
            ...prevStatus,
            [id]: !prevStatus[id],
        }));
    };

    return (
        <div className="following-container">
            <h1 className="following-title">
                We have found these profiles based on your location
            </h1>
            <div className="profile-list">
                {profiles.map((profile) => (
                    <div key={profile.id} className="profile-card">
                        <img
                            src={require(`./images/${profile.image}`)}
                            alt={profile.name}
                            className="profile-image"
                        />
                        <div className="profile-info">
                            <h3 className="profile-name">{profile.name}</h3>
                            <p className="profile-followers">{profile.followers}</p>
                            <p className="profile-location">{profile.location}</p>
                        </div>
                        <button
                            className={`follow-button ${
                                followStatus[profile.id] ? "following" : ""
                            }`}
                            onClick={() => toggleFollow(profile.id)}
                        >
                            {followStatus[profile.id] ? "Following" : "Follow"}
                        </button>
                    </div>
                ))}
            </div>
            <div className="footer-buttons">
                <button className="skip-button">Skip</button>
                <button className="continue-button">Continue</button>
            </div>
        </div>
    );
};

export default Following;
