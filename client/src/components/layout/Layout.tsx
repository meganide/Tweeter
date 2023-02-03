import { Outlet } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

interface IProps {
  setDarkToggle: () => void;
  darkToggle: boolean;
}

function Layout(props: IProps) {
  const { setDarkToggle, darkToggle } = props;
  
  return (
    <div>
      <Navbar setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
      <Outlet />
    </div>
  );
}

export default Layout;
