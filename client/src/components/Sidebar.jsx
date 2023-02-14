import {
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  RectangleStackIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

function Sidebar() {
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <img src={logo} alt="logo" className="h-9 m-3 cursor-pointer" />
      <div className="sidebar-icons">
        <HomeIcon className="icon" />
        <p className="hidden md:inline-flex">Home</p>
      </div>
      <div className="sidebar-icons">
        <HashtagIcon className="icon" />
        <p className="hidden md:inline-flex">Explore</p>
      </div>
      <div className="sidebar-icons">
        <BellIcon className="icon" />
        <p className="hidden md:inline-flex">Notification</p>
      </div>
      <div className="sidebar-icons">
        <EnvelopeIcon className="icon" />
        <p className="hidden md:inline-flex">Messages</p>
      </div>
      <div className="sidebar-icons">
        <BookmarkIcon className="icon" />
        <p className="hidden md:inline-flex">Bookmarks</p>
      </div>
      <div className="sidebar-icons">
        <RectangleStackIcon className="icon" />
        <p className="hidden md:inline-flex">Lists</p>
      </div>

      <div className="sidebar-icons">
        <Link to="/login" className="flex items-center">
          <UserIcon className="icon" />
          <p className="hidden md:inline-flex">Sign in</p>
        </Link>
      </div>

      <div className="sidebar-icons">
        <EllipsisHorizontalCircleIcon className="icon" />
        <p className="hidden md:inline-flex">More</p>
      </div>
    </div>
  );
}

export default Sidebar;
