import { useState } from 'react';

import Card from '../../components/common/Card';
import { useUpload } from '../../hooks/useUpload';
import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter';

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
