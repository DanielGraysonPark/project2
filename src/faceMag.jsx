import React, { useEffect, useState } from 'react';

const ProfileInfo = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => {
        const profiles = data.results.map(user => ({
          picture: user.picture.large,
          name: `${user.name.first} ${user.name.last}`,
          age: user.dob.age,
          location: `${user.location.city}, ${user.location.country}`,
        }));
        setProfiles(profiles);
      });
  }, []);

  if (!profiles.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header className="header">
        <h1>FaceMag</h1>
      </header>
      <div className="profile-container">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-info">
            <img src={profile.picture} alt="Profile" />
            <div>
              <h2>{profile.name}</h2>
              <h4><span id="infoCol">Age: </span> {profile.age}</h4>
              <h4><span id="infoCol">Location: </span>{profile.location}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileInfo;