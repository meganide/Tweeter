import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import ReplyToolTip from './ReplyTooltip';
import { useToggle } from '../hooks/useToggle';

function Tweet() {
  const { toggle: showTooltip, toggleShow: toggleShowTooltip } = useToggle();
  const [replyStatus, setReplyStatus] = useState('Everyone can reply');

  return (
    <section className="flex w-full flex-col gap-3 rounded-xl p-3 shadow-lg">
      <h2 className="text-xs text-gray-700 dark:text-white">Tweet something</h2>
      <hr className="border-zinc-300 dark:border-gray-800" />
      <section className="mb-3 flex w-full gap-3">
        <img className="h-[40px] rounded-md" src="images/icons/avatar.png" alt="avatar" />
        <textarea
          className="shadow-md] w-full resize-none rounded-md bg-transparent px-3 py-1 placeholder:text-gray-400 focus:outline-none dark:text-gray-200"
          placeholder="What's happening?"
          name="tweet"
          id="tweet"
          rows={3}
          required
        ></textarea>
      </section>
      <section className="flex justify-between lg:ml-[64px]">
        <section className="flex items-center gap-2">
          <ImageIcon className="cursor-pointer text-accent hover:text-sky-700" />
          <article className="relative">
            <PublicIcon
              className="cursor-pointer text-accent hover:text-sky-700"
              onClick={toggleShowTooltip}
            />
            {showTooltip && (
              <OutsideClickHandler onOutsideClick={toggleShowTooltip}>
                <ReplyToolTip setReplyStatus={setReplyStatus} />
              </OutsideClickHandler>
            )}
          </article>
          <span className="text-xs text-accent">{replyStatus}</span>
        </section>
        <input
          className="cursor-pointer rounded-md bg-accent px-4 py-2 text-white hover:bg-sky-700"
          type="submit"
          value="Tweet"
        />
      </section>
    </section>
  );
}

export default Tweet;
