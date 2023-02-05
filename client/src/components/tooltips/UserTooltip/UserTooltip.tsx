import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext, IAuthContext } from '../../../contexts/authContext';
import UserTooltipLink from './UserTooltipLink';

interface IProps {
  toggleShowTooltip: () => void;
}

function UserTooltip(props: IProps) {
  const { toggleShowTooltip } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const links = [
    {
      icon: <AccountCircleIcon className="h-[30px]" />,
      link: '/profile/' + currentUser?.name,
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

  return (
    <aside className="absolute top-14 right-0 flex flex-col rounded-md border bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-main-dark">
      {links.map((link) => {
        return (
          <article onClick={toggleShowTooltip} key={uuidv4()}>
            <UserTooltipLink link={link} />
          </article>
        );
      })}
    </aside>
  );
}

export default UserTooltip;
