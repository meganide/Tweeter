import { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext, IAuthContext } from '../../contexts/authContext';
import { BASE_URL } from '../../utils/baseUrl';
import Button from '../../components/common/Button';
import useInputs from '../../hooks/useInputs';

function RegisterInputs() {
  const { login } = useContext(AuthContext) as IAuthContext;

  const { inputs, handleChange } = useInputs({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<null | string>(null);

  const navigate = useNavigate();

  async function handleRegister(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    try {
      await axios.post(BASE_URL + '/api/auth/register', inputs);
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
      {error && <p className="text-red-700">{error}</p>}
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

export default RegisterInputs;
