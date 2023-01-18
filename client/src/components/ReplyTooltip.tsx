import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';

interface iProps {
  setReplyStatus: React.Dispatch<React.SetStateAction<string>>;
}

function ReplyToolTip({ setReplyStatus }: iProps) {
  return (
    <aside className="absolute top-14 left-0 flex flex-col rounded-md border bg-main-default p-2 shadow-lg dark:border-gray-700 dark:bg-main-dark">
      <h2 className="px-3 py-1 text-xs text-gray-700 dark:text-gray-300">Who can reply?</h2>
      <p className="mb-2 px-3 text-xs text-gray-400 dark:text-gray-400">
        Choose who can reply to this Tweet.
      </p>
      <TooltipOptions setReplyStatus={setReplyStatus} />
    </aside>
  );
}

function TooltipOptions({ setReplyStatus }: iProps) {
  const options = [
    {
      icon: <PublicIcon className="h-[30px]" />,
      text: 'Everyone',
    },
    {
      icon: <PeopleIcon className="h-[30px]" />,
      text: 'People you follow',
    },
  ];

  function handleOnClick(e: any, option: string) {
    const replyStatus = option + ' can reply';
    setReplyStatus(replyStatus);
  }

  return (
    <section>
      {options.map((option) => {
        return (
          <article
            className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-slate-200 dark:hover:bg-zinc-800"
            onClick={(e) => handleOnClick(e, option.text)}
          >
            {option.icon}
            <p className="min-w-[190px] whitespace-nowrap dark:text-gray-400">{option.text}</p>
          </article>
        );
      })}
    </section>
  );
}

export default ReplyToolTip;
