import { v4 as uuidv4 } from 'uuid';

import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import { IProps } from './ReplyTooltip';
import ReplyTooltipOption from './ReplyTooltipOption';

function TooltipOptions(props: IProps) {
  const { setReplyStatus, toggleShowTooltip } = props;

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

  return (
    <section>
      {options.map((option) => {
        return (
          <article onClick={toggleShowTooltip} key={uuidv4()}>
            <ReplyTooltipOption setReplyStatus={setReplyStatus} option={option} />
          </article>
        );
      })}
    </section>
  );
}

export default TooltipOptions;
