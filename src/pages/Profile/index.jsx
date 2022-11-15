import { useState } from 'react';
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
      {currentTab === PROFILE_TABS[0] && <h1>Nqmam nervi</h1>}
    </div>
  );
};

export default ProfilePage;
