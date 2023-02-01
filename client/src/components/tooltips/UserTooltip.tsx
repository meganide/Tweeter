import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';

function UserTooltip() {
  const links = [
    {
      icon: <AccountCircleIcon className="h-[30px]" />,
      link: '/profile',
      text: 'My Profile',
    },
    {
      icon: <SettingsIcon className="h-[30px]" />,
      link: '/settings',
      text: 'Settings',
    },
    {
      icon: <LogoutIcon className="h-[30px] text-red-500" />,
      link: '/login',
      text: 'Logout',
    },
  ];

  async function handleLogout() {
    try {
      await axios.post(BASE_URL + '/api/auth/logout', undefined, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <aside className="absolute top-14 right-0 flex flex-col rounded-md border bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-main-dark">
      {links.map((link) => {
        return (
          <article
            onClick={link.text === 'Logout' ? handleLogout : undefined}
            key={uuidv4()}
            className={`flex cursor-pointer items-center gap-3 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800 ${
              link.text === 'Settings' && 'mb-2 border-b border-gray-300 dark:border-gray-800'
            }`}
          >
            <Link
              to={link.link}
              className=" flex h-full min-w-[150px] place-items-end gap-2 p-3 dark:text-[#828282]"
            >
              {link.icon}
              {link.text}
            </Link>
          </article>
        );
      })}
    </aside>
  );
}

export default UserTooltip;
