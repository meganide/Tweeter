import { imagePaths } from "../utils/Data";

function SocialLogins() {
  return (
    <article className="flex w-full cursor-pointer place-items-center justify-center gap-4 rounded-md border border-zinc-400 py-2 px-4 hover:bg-sky-700 hover:text-white dark:border-gray-700 sm:max-w-[75%]">
      <img className="w-10" src={imagePaths.googleIcon} alt="google" />
      <span className="font-semibold dark:text-white">Sign in with Google</span>
    </article>
  );
}

export default SocialLogins;
