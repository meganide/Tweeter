import HorizontalLine from '../components/common/HorizontalLine';
import RegisterHeader from '../features/Register/RegisterHeader';
import RegisterInputs from '../features/Register/RegisterInputs';
import SocialLogins from '../components/common/SocialLogins';
import { useMediaQuery } from 'react-responsive';

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
        {isDesktopOrLaptop && <aside className="flex flex-1 items-center justify-center bg-register bg-cover bg-center dark:bg-registerDark"></aside>}
      </section>
    </section>
  );
}

export default Register;
