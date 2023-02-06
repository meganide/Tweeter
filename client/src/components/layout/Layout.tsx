import { Outlet } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
