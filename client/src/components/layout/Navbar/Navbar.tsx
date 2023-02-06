import Logo from '../../common/Logo';
import DesktopLinks from './DesktopLinks';
import NavbarIcons from './NavbarIcons';
import MobileBottomBar from './MobileBottomBar';

function Navbar() {
  return (
    <>
      <section className="sticky top-0 z-50 flex h-[60px] items-center justify-center bg-main-default p-1 px-3 shadow-[0_2px_2px_rgba(0,0,0,0.05)] dark:bg-main-dark dark:shadow-[0_2px_2px_rgba(255,255,255,0.05)]">
        <section className="flex w-full max-w-7xl items-center justify-between">
          <Logo />
          <DesktopLinks />
          <NavbarIcons />
        </section>
      </section>
      <MobileBottomBar />
    </>
  );
}

export default Navbar;
