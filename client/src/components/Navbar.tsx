import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import MediaQuery from 'react-responsive';
import UserTooltip from './UserTooltip';

interface iProps {
  setDarkToggle: React.Dispatch<React.SetStateAction<boolean>>;
  darkToggle: boolean;
}

function Navbar({ setDarkToggle, darkToggle }: iProps) {
  const location = useLocation();
  const [showUserTooltip, setShowUserTooltip] = useState(false);

  return (
    <section className="sticky top-0 flex h-[60px] items-center justify-center bg-main-default p-1 px-3 shadow-[0_2px_2px_rgba(0,0,0,0.05)] dark:bg-main-dark dark:shadow-[0_2px_2px_rgba(255,255,255,0.05)]">
      <section className="flex w-full max-w-7xl items-center justify-between">
        <Link to="/">
          <img className="w-[40px] cursor-pointer" src="images/icons/icon.png" alt="icon" />
        </Link>
        <MediaQuery minWidth={768}>
          <section className="flex gap-20">
            <Link
              className={`font-[poppins] font-semibold text-[#828282] ${
                location.pathname === '/' &&
                'underline decoration-accent decoration-2 underline-offset-8'
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`font-[poppins] font-semibold text-[#828282] ${
                location.pathname === '/explore' &&
                'underline decoration-accent decoration-2 underline-offset-8'
              }`}
              to="/explore"
            >
              Explore
            </Link>
            <Link
              className={`font-[poppins] font-semibold text-[#828282] ${
                location.pathname === '/bookmarks' &&
                'underline decoration-accent decoration-2 underline-offset-8'
              }`}
              to="/bookmarks"
            >
              Bookmarks
            </Link>
          </section>
        </MediaQuery>
        <section className="relative flex gap-10">
          <img
            className="h-[40px] cursor-pointer"
            src={darkToggle ? 'images/icons/dark.png' : 'images/icons/light.png'}
            alt="theme"
            onClick={() => setDarkToggle(!darkToggle)}
          />
          <img
            className="h-[40px] cursor-pointer"
            src="images/icons/avatar.png"
            alt="avatar"
            onClick={() => setShowUserTooltip(!showUserTooltip)}
          />
          {showUserTooltip && <UserTooltip />}
        </section>
      </section>
    </section>
  );
}

export default Navbar;
