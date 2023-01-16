import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

function Register() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <section className="flex min-h-screen items-center justify-center bg-blue-100 p-3 dark:bg-main-dark">
      <section className="flex h-full max-h-[80%] w-full max-w-7xl overflow-hidden rounded-lg">
        <article className="flex h-full flex-1 flex-col items-center justify-center bg-sky-100 py-16 px-4 dark:bg-zinc-800">
          <article className="mb-16 flex items-center justify-center gap-5">
            <img className="h-[40px]" src="images/icons/icon.png" alt="icon" />
            <h1 className="text-2xl dark:text-white md:text-3xl">Tweeter</h1>
          </article>
          <h2 className="mb-5 w-full text-xl dark:text-white sm:max-w-[75%]">Register</h2>
          <form action="" className="flex w-full flex-col gap-4 sm:max-w-[75%] sm:p-0">
            <input
              className="w-full rounded-md border p-2 dark:text-white dark:border-gray-700 dark:bg-transparent"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              className="w-full rounded-md border p-2 dark:text-white dark:border-gray-700 dark:bg-transparent"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="w-full rounded-md border p-2 dark:text-white dark:border-gray-700 dark:bg-transparent"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              className="w-full cursor-pointer rounded-md border-none bg-accent p-2 text-white hover:bg-sky-700"
              type="submit"
              value="Register"
            />
            <p className="text-right font-semibold dark:text-white">
              Already have an account?&nbsp;
              <Link to="/login" className="cursor-pointer text-accent">
                Login
              </Link>
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
        {isDesktopOrLaptop && (
          <aside className="flex flex-1 items-center justify-center bg-register bg-cover bg-center dark:bg-registerDark"></aside>
        )}
      </section>
    </section>
  );
}

export default Register;
