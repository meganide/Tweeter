import { v4 as uuidv4 } from 'uuid';

import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import { IProps } from './ReplyTooltip';

function TooltipOptions(props: IProps) {
  const { setReplyStatus } = props;

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
            key={uuidv4()}
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

export default TooltipOptions;
