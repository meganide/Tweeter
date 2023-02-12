import LoginHeader from '../features/Login/LoginHeader';
import LoginInputs from '../features/Login/LoginInputs';
import { useMediaQuery } from 'react-responsive';

function Login() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 p-3 dark:bg-main-dark">
      <section className="flex h-full max-h-[80%] w-full max-w-7xl overflow-hidden rounded-lg">
        {isDesktopOrLaptop && <aside className="flex flex-1 items-center justify-center bg-login bg-cover bg-center dark:bg-loginDark"></aside>}
        <article className="flex h-full flex-1 flex-col items-center justify-center bg-sky-100 py-32 px-4 dark:bg-zinc-800">
          <LoginHeader />
          <h2 className="mb-5 w-full text-xl dark:text-white sm:max-w-[75%]">Sign in</h2>
          <LoginInputs />
        </article>
      </section>
    </section>
  );
}

export default Login;
