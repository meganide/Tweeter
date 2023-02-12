import Card from '../../components/common/Card/Card';
import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter';
import { useState } from 'react';
import { useUpload } from '../../hooks/useUpload';

function Tweet() {
  const [tweet, setTweet] = useState('');
  const upload = useUpload();

  return (
    <Card headerTitle="Tweet something">
      <TweetBody setTweet={setTweet} tweet={tweet} previewImage={upload.previewImage} />
      <TweetFooter tweet={tweet} setTweet={setTweet} upload={upload} />
    </Card>
  );
}

export default Tweet;
