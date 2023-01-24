import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import ReplyToolTip from '../components/tooltips/ReplyTooltip';
import { useToggle } from '../hooks/useToggle';
import Button from '../components/common/Button';
import Avatar from '../components/common/Avatar';
import Card from '../components/common/Card';

function Tweet() {
  return (
    <Card headerTitle='Tweet something'>
      <TweetBody />
      <TweetFooter />
    </Card>
  );
}

function TweetBody() {
  return (
    <section className="mb-3 flex w-full gap-3">
      <Avatar />
      <textarea
        className="shadow-md] w-full resize-none rounded-md bg-transparent px-3 py-1 placeholder:text-gray-400 dark:placeholder:text-neutral-400 focus:outline-none dark:text-gray-200"
        placeholder="What's happening?"
        name="tweet"
        id="tweet"
        rows={3}
        required
      ></textarea>
    </section>
  );
}

function TweetFooter() {
  const { toggle: showTooltip, toggleShow: toggleShowTooltip } = useToggle();
  const [replyStatus, setReplyStatus] = useState('Everyone can reply');

  return (
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
      <Button type="button" text="Tweet" />
    </section>
  );
}

export default Tweet;
