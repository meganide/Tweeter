import { Link, useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import OutsideClickHandler from 'react-outside-click-handler';
import { v4 as uuidv4 } from 'uuid';

import UserTooltip from '../tooltips/UserTooltip';
import { useToggle } from '../../hooks/useToggle';
import { imagePaths, links } from '../../utils/data';
import Logo from '../common/Logo';
import Avatar from '../common/Avatar';

interface IProps {
  setDarkToggle: () => void;
  darkToggle: boolean;
}

function Navbar(props: IProps) {
  const { setDarkToggle, darkToggle } = props;

  return (
    <>
      <section className="sticky top-0 flex h-[60px] items-center justify-center bg-main-default p-1 px-3 shadow-[0_2px_2px_rgba(0,0,0,0.05)] dark:bg-main-dark dark:shadow-[0_2px_2px_rgba(255,255,255,0.05)]">
        <section className="flex w-full max-w-7xl items-center justify-between">
          <Logo />
          <DesktopLinks />
          <NavbarIcons setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
        </section>
      </section>
      <MobileBottomBar />
    </>
  );
}

function DesktopLinks() {
  const location = useLocation();

  return (
    <MediaQuery minWidth={768}>
      <section className="flex gap-20">
        {links.map((link) => {
          return (
            <Link
              key={uuidv4()}
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
  );
}

function NavbarIcons(props: IProps) {
  const { setDarkToggle, darkToggle } = props;

  const { toggle: showTooltip, toggleShow: toggleShowTooltip } = useToggle();

  return (
    <section className="relative flex">
      <img
        className="mr-5 h-[40px] cursor-pointer"
        src={darkToggle ? imagePaths.darkMode : imagePaths.lightMode}
        alt="theme"
        onClick={setDarkToggle}
      />
      <Avatar toggleShowTooltip={toggleShowTooltip} />
      {showTooltip && (
        <OutsideClickHandler onOutsideClick={toggleShowTooltip}>
          <UserTooltip />
        </OutsideClickHandler>
      )}
    </section>
  );
}

function MobileBottomBar() {
  return (
    <MediaQuery maxWidth={768}>
      <section className="fixed bottom-0 flex h-[60px] w-full items-center justify-center bg-main-default p-1 px-3 shadow-sm shadow-black dark:bg-main-dark dark:shadow-white">
        <section className="flex w-full items-center justify-center">
          <section className="flex w-full justify-around">
            {links.map((link) => {
              return (
                <Link key={uuidv4()} to={link.pathname}>
                  {link.icon}
                </Link>
              );
            })}
          </section>
        </section>
      </section>
    </MediaQuery>
  );
}

export default Navbar;
