import { useState } from 'react';
import UserFavourites from '../../components/UserFavourites';
import UserSideNav from '../../components/UserSideNav';
import './index.css';

export const PROFILE_TABS = ['Favourites'];

const ProfilePage = () => {
  const [currentTab, setCurrentTab] = useState(PROFILE_TABS[0]);

  return (
    <div className="profile-wrapper">
      <div className="side-nav-wrapper">
        <UserSideNav setCurrentTab={(val) => setCurrentTab(val)} />
      </div>
      {currentTab === PROFILE_TABS[0] && <UserFavourites />}
    </div>
  );
};

export default ProfilePage;
