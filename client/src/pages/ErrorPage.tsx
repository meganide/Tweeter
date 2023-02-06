import { useRouteError } from 'react-router-dom';
import Navbar from '../components/layout/Navbar/Navbar';

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex min-h-screen w-screen flex-col">
      <Navbar />
      <div className="flex flex-grow flex-col items-center justify-center dark:text-white">
        <h1 className="mb-1 text-2xl text-inherit">Oops!</h1>
        <p className="mb-1">Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.messsage}</i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
