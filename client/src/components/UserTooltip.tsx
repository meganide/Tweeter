import { Link } from 'react-router-dom';

function UserTooltip() {
  return (
    <aside className="absolute top-14 right-0 flex flex-col rounded-md border bg-main-default p-2 shadow-lg dark:border-gray-700 dark:bg-main-dark">
      <article className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-slate-200 dark:hover:bg-zinc-800">
        <img className="h-[30px]" src="images/icons/avatar.png" alt="" />
        <Link to="profile" className="min-w-[150px]">
          My Profile
        </Link>
      </article>
      <article className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-slate-200  dark:hover:bg-zinc-800">
        <img className="h-[30px]" src="images/icons/settings.png" alt="" />
        <Link to="settings" className="min-w-[150px]">
          Settings
        </Link>
      </article>
      <hr className="my-2 dark:border-gray-700" />
      <article className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-slate-200  dark:hover:bg-zinc-800">
        <img className="h-[30px]" src="images/icons/logout.png" alt="" />
        <Link to="logout" className="min-w-[150px]">
          Logout
        </Link>
      </article>
    </aside>
  );
}

export default UserTooltip;
