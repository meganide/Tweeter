import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../utils/baseUrl';

interface IProps {
  link: ILink;
}

interface ILink {
  icon: JSX.Element;
  link: string;
  text: string;
}

function UserTooltipLink(props: IProps) {
  const { link } = props;

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
    <article
      onClick={link.text === 'Logout' ? handleLogout : undefined}
      className={`flex cursor-pointer items-center gap-3 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800 ${
        link.text === 'My Profile' && 'mb-2 border-b border-gray-300 dark:border-gray-800'
      }`}
    >
      <Link to={link.link} className=" flex h-full min-w-[150px] place-items-end gap-2 p-3 dark:text-[#828282]">
        {link.icon}
        {link.text}
      </Link>
    </article>
  );
}

export default UserTooltipLink;
