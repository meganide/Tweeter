import Avatar from "../../components/common/Avatar";

interface IProps {
  setTweet: React.Dispatch<React.SetStateAction<string>>;
  tweet: string;
  previewImage?: string;
  setPreviewImage?: React.Dispatch<React.SetStateAction<string>>;
}

function TweetBody(props: IProps) {
  const { setTweet, tweet, previewImage } = props;

  return (
    <section className="mb-3 flex w-full gap-3">
      <Avatar />
      <textarea
        className="shadow-md] w-full resize-none rounded-md bg-transparent px-3 py-1 placeholder:text-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder:text-neutral-400"
        placeholder="What's happening?"
        name="tweet"
        rows={3}
        required
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      ></textarea>
      <img className="w-16 object-cover" src={previewImage} alt="" />
    </section>
  );
}

export default TweetBody