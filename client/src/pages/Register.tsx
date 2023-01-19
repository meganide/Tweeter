import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import HorizontalLine from '../components/HorizontalLine';
import SocialLogins from '../components/SocialLogins';
import { imagePaths } from '../utils/Data';

function Register() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 p-3 dark:bg-main-dark">
      <section className="flex h-full max-h-[80%] w-full max-w-7xl overflow-hidden rounded-lg">
        <article className="flex h-full flex-1 flex-col items-center justify-center bg-sky-100 py-16 px-4 dark:bg-zinc-800">
          <RegisterHeader />
          <h2 className="mb-5 w-full text-xl dark:text-white sm:max-w-[75%]">Register</h2>
          <RegisterInputs />
          <HorizontalLine />
          <SocialLogins />
        </article>
        {isDesktopOrLaptop && (
          <aside className="flex flex-1 items-center justify-center bg-register bg-cover bg-center dark:bg-registerDark"></aside>
        )}
      </section>
    </section>
  );
}

function RegisterHeader() {
  return (
    <article className="mb-16 flex items-center justify-center gap-5">
      <img className="h-[40px]" src={imagePaths.logo} alt="icon" />
      <h1 className="text-2xl dark:text-white md:text-3xl">Tweeter</h1>
    </article>
  );
}

function RegisterInputs() {
  return (
    <form action="" className="flex w-full flex-col gap-4 sm:max-w-[75%] sm:p-0">
      <input
        className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-transparent dark:text-white"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
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
      <Button type="submit" text="Register" />
      <p className="text-right font-semibold dark:text-white">
        Already have an account?&nbsp;
        <Link to="/login" className="cursor-pointer text-accent">
          Login
        </Link>
      </p>
    </form>
  );
}

export default Register;
