import Avatar from '../components/common/Avatar';
import { postOptionsData } from '../utils/data';

function Post() {
  return (
    <article className="my-7 rounded-lg bg-white p-5 shadow-md dark:bg-secondary-dark">
      <PostHeader />
      <PostBody />
      <PostFooter />
      <PostOptions />
    </article>
  );
}

function PostHeader() {
  return (
    <header className="flex items-center gap-6">
      <Avatar />
      <section className="flex flex-col">
        <h2>John Doe</h2>
        <p className="text-xs text-gray-500">24 August at 20:43</p>
      </section>
    </header>
  );
}

function PostBody() {
  return (
    <section>
      <p className="my-5 text-sm md:text-lg">
        Traveling – it leaves you speechless, then turns you into a storyteller.
      </p>
      <img className="w-full rounded-lg" src="images/travel.jpg" alt="" />
    </section>
  );
}

function PostFooter() {
  return (
    <section className="mt-5 flex justify-end gap-4 text-xs text-gray-400 sm:text-base">
      <p className="cursor-pointer">449 Comments</p>
      <p className="cursor-pointer">4 Retweets</p>
      <p className="cursor-pointer">7 Saved</p>
    </section>
  );
}

function PostOptions() {
  return (
    <section className="flex border-b border-t">
      {postOptionsData.map((option) => {
        return (
          <article className="flex items-center justify-center gap-2">
            {option.icon}
            <p>{option.text}</p>
          </article>
        );
      })}
    </section>
  );
}

export default Post;
