import { useMediaQuery } from 'react-responsive';

interface IProps {
  closeOnClick?: () => void;
}

function ErrorAlert(props: IProps) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const { closeOnClick } = props;
  return (
    <section className="flex justify-center">
      <section className="mx-auto w-full max-w-7xl">
        <div
          id="alert-additional-content-2"
          className="mb-4 flex justify-between rounded-lg border border-red-300 bg-red-100 p-4 text-red-800 dark:border-red-400  dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <div className="flex items-center">
            <svg aria-hidden="true" className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-sm font-medium text-red-800 dark:text-red-400 md:text-lg">
              There was an error saving changes to your profile, please try again!
            </h3>
          </div>
          <div className={`flex ${isTabletOrMobile && 'flex-col'} gap-2`}>
            <button
              type="button"
              className="md:text-md mr-2 inline-flex h-12 w-full items-center rounded-lg bg-red-800 px-3 py-1.5 text-center text-xs font-medium text-white focus:outline-none focus:ring-4 focus:ring-red-300 hover:bg-red-900 dark:bg-red-600 dark:focus:ring-red-800 dark:hover:bg-red-700"
              data-dismiss-target="#alert-additional-content-1"
              aria-label="Close"
              onClick={closeOnClick}
            >
              Dismiss
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ErrorAlert;
