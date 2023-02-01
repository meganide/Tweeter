import axios from 'axios';
import { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import HorizontalLine from '../components/common/HorizontalLine';
import Logo from '../components/common/Logo';
import SocialLogins from '../components/common/SocialLogins';
import { AuthContext, IAuthContext } from '../contexts/authContext';

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
      <Logo />
      <h1 className="text-2xl dark:text-white md:text-3xl">Tweeter</h1>
    </article>
  );
}

function RegisterInputs() {
  const { login } = useContext(AuthContext) as IAuthContext;
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<null | string>(null);

  const navigate = useNavigate()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleRegister(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    try {
      await axios.post('http://localhost:8000/api/auth/register', inputs);
      await login(inputs);
      navigate('/');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err.response?.data?.error;
        setError(axiosError);
      }
    }
  }

  return (
    <form onSubmit={handleRegister} className="flex w-full flex-col gap-4 sm:max-w-[75%] sm:p-0">
      <input
        className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-transparent dark:text-white"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-transparent dark:text-white"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-transparent dark:text-white"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {error && <p className='text-red-700'>{error}</p>}
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
