import { Link, useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive';

function Navbar() {
  const location = useLocation();

  return (
    <section className="flex h-[60px] items-center justify-center p-1 px-3 shadow-[0_2px_2px_rgba(0,0,0,0.05)]">
      <section className="flex w-full max-w-7xl items-center justify-between">
        <Link to="/">
          <img className="w-[40px] cursor-pointer" src="images/icons/icon.png" alt="icon" />
        </Link>
        <MediaQuery minWidth={768}>
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
        </MediaQuery>
        <img className="w-[40px] cursor-pointer" src="images/icons/avatar.png" alt="avatar" />
      </section>
    </section>
  );
}

export default Navbar;
