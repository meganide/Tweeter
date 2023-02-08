import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import { IProps } from './Post';
import { convertToLocaleTimezone } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

function PostRetweet(props: IProps) {
  const { postData } = props;

  const navigate = useNavigate();

  return (
    <section className="mb-3 flex gap-2">
      <AutorenewOutlinedIcon className="text-[gray]" />
      <section className="flex">
        <p className="cursor-pointer font-semibold italic" onClick={() => navigate('/profile/' + postData.retweetedBy?.name)}>
          {postData?.retweetedBy?.name}&nbsp;
        </p>
        <p>{' Retweeted at ' + (postData.retweetedAt && convertToLocaleTimezone(postData.retweetedAt))}</p>
      </section>
    </section>
  );
}

export default PostRetweet;
