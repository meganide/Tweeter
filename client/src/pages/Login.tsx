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
          <h1 className="mb-10 text-2xl dark:text-white">Sign in</h1>
          <form action="" className="flex w-full flex-col gap-4 sm:max-w-[75%] sm:p-0">
            <input
              className="w-full rounded-md border-2 p-2"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="w-full rounded-md border-2 p-2"
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
            <hr className="my-8 h-px w-full border-0 bg-zinc-400 dark:bg-gray-700 sm:max-w-[75%]" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-sky-100 px-3 font-medium text-zinc-400 dark:bg-zinc-800 dark:text-white">
              OR
            </span>
          </div>
          <article className="flex w-full cursor-pointer place-items-center justify-center gap-4 rounded-md border border-black py-2 px-4 hover:bg-sky-700 hover:text-white dark:border-gray-700 sm:max-w-[75%]">
            <img className="w-10" src="images/icons/Google.svg" alt="google" />
            <span className="font-semibold dark:text-white">Sign in with Google</span>
          </article>
        </article>
      </section>
    </section>
  );
}

export default Login;
