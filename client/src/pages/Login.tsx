import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import HorizontalLine from '../components/common/HorizontalLine';
import Logo from '../components/common/Logo';
import SocialLogins from '../components/common/SocialLogins';

function Login() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 p-3 dark:bg-main-dark">
      <section className="flex h-full max-h-[80%] w-full max-w-7xl overflow-hidden rounded-lg">
        {isDesktopOrLaptop && (
          <aside className="flex flex-1 items-center justify-center bg-login bg-cover bg-center dark:bg-loginDark"></aside>
        )}
        <article className="flex h-full flex-1 flex-col items-center justify-center bg-sky-100 py-16 px-4 dark:bg-zinc-800">
          <LoginHeader />
          <h2 className="mb-5 w-full text-xl dark:text-white sm:max-w-[75%]">Sign in</h2>
          <LoginInputs />
          <HorizontalLine />
          <SocialLogins />
        </article>
      </section>
    </section>
  );
}

function LoginHeader() {
  return (
    <article className="mb-16 flex items-center justify-center gap-5">
      <Logo />
      <h1 className="text-2xl dark:text-white md:text-3xl">Tweeter</h1>
    </article>
  );
}

function LoginInputs() {
  return (
    <form action="" className="flex w-full flex-col gap-4 sm:max-w-[75%] sm:p-0">
      <input
        className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-transparent dark:text-white"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
      />
      <input
        className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-transparent dark:text-white"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <Button type='submit' text='Login' />
      <p className="text-right font-semibold dark:text-white">
        Don't have an account?&nbsp;
        <Link to="/register" className="cursor-pointer text-accent">
          Register
        </Link>
      </p>
    </form>
  );
}


export default Login;
