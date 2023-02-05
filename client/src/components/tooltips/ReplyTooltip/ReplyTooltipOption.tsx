import { IProps as IReplyTooltipProps } from './ReplyTooltip';

interface IProps extends IReplyTooltipProps {
  option: IOption;
}

interface IOption {
  icon: JSX.Element;
  text: string;
}

function ReplyTooltipOption(props: IProps) {
  const { setReplyStatus, option } = props;

  function handleOnClick(e: any, option: string) {
    const replyStatus = option + ' can reply';
    setReplyStatus(replyStatus);
  }

  return (
    <article
      className="flex cursor-pointer items-center gap-3 rounded-md p-3 hover:bg-slate-200 dark:hover:bg-zinc-800"
      onClick={(e) => handleOnClick(e, option.text)}
    >
      {option.icon}
      <p className="min-w-[190px] whitespace-nowrap dark:text-gray-400">{option.text}</p>
    </article>
  );
}

export default ReplyTooltipOption;
