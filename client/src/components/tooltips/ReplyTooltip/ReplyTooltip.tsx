import TooltipOptions from "./TooltipOptions";

export interface IProps {
  setReplyStatus: React.Dispatch<React.SetStateAction<string>>;
  toggleShowTooltip?: () => void;
}

function ReplyToolTip(props: IProps) {
  const { setReplyStatus, toggleShowTooltip } = props;

  return (
    <aside className="absolute top-14 left-0 flex flex-col rounded-md border bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-main-dark">
      <h2 className="px-3 py-1 text-xs text-gray-700 dark:text-gray-300">Who can reply?</h2>
      <p className="mb-2 px-3 text-xs text-gray-400 dark:text-gray-400">Choose who can reply to this Tweet.</p>
      <TooltipOptions setReplyStatus={setReplyStatus} toggleShowTooltip={toggleShowTooltip} />
    </aside>
  );
}

export default ReplyToolTip;
