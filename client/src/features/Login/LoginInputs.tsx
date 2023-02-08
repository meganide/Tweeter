import { AuthContext, IAuthContext } from '../../contexts/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import Button from '../../components/common/Button';
import axios from 'axios';
import useInputs from '../../hooks/useInputs';

function LoginInputs() {
  const { login } = useContext(AuthContext) as IAuthContext;

  const { inputs, handleChange } = useInputs({
    email: '',
    password: '',
  });

  const [error, setError] = useState<null | string>(null);

  const navigate = useNavigate();

  async function handleLogin(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    try {
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
    <form onSubmit={handleLogin} className="flex w-full flex-col gap-4 sm:max-w-[75%] sm:p-0">
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
      {error && <p className="text-red-700">{error}</p>}
      <Button type="submit" text="Login" />
      <p className="text-right font-semibold dark:text-white">
        Don't have an account?&nbsp;
        <Link to="/register" className="cursor-pointer text-accent">
          Register
        </Link>
      </p>
    </form>
  );
}

export default LoginInputs;
