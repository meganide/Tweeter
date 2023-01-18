import { Link, useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import OutsideClickHandler from 'react-outside-click-handler';

import UserTooltip from './UserTooltip';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useToggle } from '../hooks/useToggle';

interface iProps {
  setDarkToggle: () => void
  darkToggle: boolean;
}

function Navbar({ setDarkToggle, darkToggle }: iProps) {
  const location = useLocation();
  const {toggle: showTooltip, toggleShow: toggleShowTooltip} = useToggle();

  const links = [
    {
      pathname: '/',
      name: 'Home',
    },
    {
      pathname: '/explore',
      name: 'Explore',
    },
    {
      pathname: '/boomarks',
      name: 'Bookmarks',
    },
  ];

  return (
    <>
      <section className="sticky top-0 flex h-[60px] items-center justify-center bg-main-default p-1 px-3 shadow-[0_2px_2px_rgba(0,0,0,0.05)] dark:bg-main-dark dark:shadow-[0_2px_2px_rgba(255,255,255,0.05)]">
        <section className="flex w-full max-w-7xl items-center justify-between">
          <Link to="/">
            <img className="w-[30px] cursor-pointer" src="images/icons/icon.png" alt="icon" />
          </Link>
          <MediaQuery minWidth={768}>
            <section className="flex gap-20">
              {links.map((link) => {
                return (
                  <Link
                    className={`font-[poppins] font-semibold text-[#828282] ${
                      location.pathname === link.pathname &&
                      'underline decoration-accent decoration-2 underline-offset-8'
                    }`}
                    to={link.pathname}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </section>
          </MediaQuery>
          <section className="relative flex">
            <img
              className="h-[40px] cursor-pointer"
              src={darkToggle ? 'images/icons/dark.png' : 'images/icons/light.png'}
              alt="theme"
              onClick={setDarkToggle}
            />
            <img
              className="ml-5 h-[40px] cursor-pointer rounded-md"
              src="images/icons/avatar.png"
              alt="avatar"
              onClick={toggleShowTooltip}
            />
            {showTooltip && (
              <OutsideClickHandler
                onOutsideClick={toggleShowTooltip}
              >
                <UserTooltip />
              </OutsideClickHandler>
            )}
          </section>
        </section>
      </section>
      <MediaQuery maxWidth={768}>
        <section className="fixed bottom-0 flex h-[60px] w-full items-center justify-center bg-main-default p-1 px-3 shadow-sm shadow-black dark:bg-main-dark dark:shadow-white">
          <section className="flex w-full items-center justify-center">
            <section className="flex w-full justify-around">
              <Link to="/">
                <HomeIcon style={{ fontSize: '2rem' }} />
              </Link>
              <Link to="/explore">
                <ExploreIcon style={{ fontSize: '2rem' }} />
              </Link>
              <Link to="/bookmarks">
                <BookmarkIcon style={{ fontSize: '2rem' }} />
              </Link>
            </section>
          </section>
        </section>
      </MediaQuery>
    </>
  );
}

export default Navbar;
