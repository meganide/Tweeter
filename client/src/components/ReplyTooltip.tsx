import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';

function ReplyToolTip() {
  return (
    <aside className="absolute top-14 left-0 flex flex-col rounded-md border bg-main-default p-2 shadow-lg dark:border-gray-700 dark:bg-main-dark">
      <h2 className="px-3 py-1 text-xs text-gray-700 dark:text-gray-300">Who can reply?</h2>
      <p className="mb-2 px-3 text-xs text-gray-400 dark:text-gray-400">
        Choose who can reply to this Tweet.
      </p>
      <article className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-slate-200 dark:hover:bg-zinc-800">
        <PublicIcon className="h-[30px]" />
        <p className="min-w-[150px] dark:text-gray-400">Everyone</p>
      </article>
      <article className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-slate-200  dark:hover:bg-zinc-800">
        <PeopleIcon className="h-[30px]" />
        <p className="min-w-[150px] dark:text-gray-400">People you follow</p>
      </article>
    </aside>
  );
}

export default ReplyToolTip;
