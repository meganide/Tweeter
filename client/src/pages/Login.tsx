import { useMediaQuery } from 'react-responsive';

function Login() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <section className="flex h-screen items-center justify-center bg-blue-300 p-3 dark:bg-main-dark">
      <section className="flex h-full max-h-[80%] w-full max-w-7xl overflow-hidden rounded-lg">
        {isDesktopOrLaptop && (
          <aside className="flex h-full flex-1 items-center justify-center bg-login bg-cover bg-center dark:bg-loginDark"></aside>
        )}
        <article className="flex h-full flex-1 flex-col items-center justify-center bg-sky-100 p-7 dark:bg-zinc-800">
          <article className="flex items-center justify-center gap-5 mb-16">
            <img className="h-[40px]" src="images/icons/icon.png" alt="icon" />
            <h1 className="text-3xl dark:text-white">Tweeter</h1>
          </article>
          <h2 className="mb-5 w-full text-xl dark:text-white sm:max-w-[75%]">Sign in</h2>
          <form action="" className="flex w-full flex-col gap-4 sm:max-w-[75%] sm:p-0">
            <input
              className="w-full rounded-md border p-2 text-white dark:border-gray-700 dark:bg-transparent"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="w-full rounded-md border p-2 text-white dark:border-gray-700 dark:bg-transparent"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              className="w-full cursor-pointer rounded-md border-none bg-accent p-2 text-white hover:bg-sky-700"
              type="submit"
              value="Login"
            />
            <p className="text-right font-semibold dark:text-white">
              Don't have an account? <span className="cursor-pointer text-accent">Register</span>
            </p>
          </form>
          <div className="relative inline-flex w-full items-center justify-center">
            <hr className="my-12 h-px w-full border-0 bg-zinc-400 dark:bg-gray-700 sm:max-w-[75%]" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-sky-100 px-3 font-medium text-zinc-400 dark:bg-zinc-800 dark:text-white">
              OR
            </span>
          </div>
          <article className="flex w-full cursor-pointer place-items-center justify-center gap-4 rounded-md border border-zinc-400 py-2 px-4 hover:bg-sky-700 hover:text-white dark:border-gray-700 sm:max-w-[75%]">
            <img className="w-10" src="images/icons/Google.svg" alt="google" />
            <span className="font-semibold dark:text-white">Sign in with Google</span>
          </article>
        </article>
      </section>
    </section>
  );
}

export default Login;
