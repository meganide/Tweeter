import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-1 text-2xl">Oops!</h1>
      <p className="mb-1">Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.messsage}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
