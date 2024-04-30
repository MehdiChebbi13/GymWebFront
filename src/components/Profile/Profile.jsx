import React, { useState, useEffect } from "react";
import "./Profile.css";
import unknown from "../../assets/unknown-user.png";
import axios from "axios";
import { useAuth } from "../../Hooks/UseAuthContext";

const Profile = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);

  const handleBack = () => {
    window.history.back();
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/users/${currentUser.id}`
        );
        setUserData(response.data.user);
      } catch (error) {
        console.error("Failed to fetch user profile.");
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser]);

  if (!userData) {
    return <div>Loading...</div>;
  }
  // upload image for profile picture
  const handlUploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    try {
      const response = await axios.post(
        `http://localhost:3001/users/upload/${currentUser.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      setImage(null);
    } catch (error) {
      console.error("Failed to upload image.");
    }
  };
  const imageUrl = image
    ? URL.createObjectURL(image)
    : `http://localhost:3001/assets/${userData.image}`;

  console.log(`http://localhost:3001/assets/${userData.image}`);
  return (
    <div className="profile-app">
      <div className="profile-card">
        <div className="profile-picture-cointaner">
          <div className="back" onClick={handleBack}>
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          {image ? (
            <img
              src={imageUrl}
              alt="Problem loading image."
              className="profile-picture"
            />
          ) : (
            <img
              src={unknown}
              alt="Problem loading image."
              className="profile-picture"
            />
          )}
        </div>
        <div className="btns">
          <div className="import">
            <input
              type="file"
              accept="image/*"
              className="input-file"
              id="profile-picture"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label htmlFor="profile-picture" className="file-label">
              <p>Upload</p>
              <span className="material-symbols-outlined">upload</span>
            </label>
          </div>
          <div className="save" onClick={() => handlUploadImage()}>
            <p>Save </p>
            <span className="material-symbols-outlined">save</span>
          </div>
        </div>
        <h2 className="profile-name">
          {userData.firstName} {userData.lastName}
        </h2>
        <div className="info">
          <p className="profile-bio">
            <h3>Email : </h3>
            {userData.email}
          </p>
          <p className="profile-bio">
            <h3>Phone Number : </h3>
            {userData.phoneNumber}
          </p>
          <p className="profile-bio">
            <h3>Subscription Plan : </h3>
            <button className={`btnSub ${userData.subscription}`} disabled>
              {userData.subscription}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
