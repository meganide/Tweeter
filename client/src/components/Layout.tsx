import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

interface iProps {
  setDarkToggle: () => void;
  darkToggle: boolean;
}

function Layout({ setDarkToggle, darkToggle }: iProps) {
  return (
    <div>
      <Navbar setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
      <Outlet />
    </div>
  );
}

export default Layout;
