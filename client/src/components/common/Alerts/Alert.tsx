import { useMediaQuery } from 'react-responsive';

interface IProps {
  saveOnClick?: () => void;
  cancelOnClick?: () => void;
  loading?: boolean;
}

function Alert(props: IProps) {
  const { saveOnClick, cancelOnClick, loading } = props;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section className="flex justify-center">
      <section className="mx-auto w-full max-w-7xl">
        <div
          id="alert-additional-content-1"
          className="mb-4 flex justify-between border border-blue-300 bg-blue-50 p-4 text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <div className="flex items-center">
            <svg aria-hidden="true" className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-sm font-medium dark:text-white md:text-lg">Save the changes made to your profile for them to be implemented.</h3>
          </div>
          <div className={`flex ${isTabletOrMobile && 'flex-col'} gap-2`}>
            <button
              type="button"
              className="text-md h-12 w-full items-center rounded-lg bg-blue-800 px-4 text-center font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-200 hover:bg-blue-900 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700"
              disabled={loading}
              onClick={saveOnClick}
            >
              {loading ? 'Loading...' : 'Save'}
            </button>
            <button
              type="button"
              className="md:text-md h-12 w-full rounded-lg border border-blue-800 bg-transparent p-1 px-2 text-center text-sm font-medium text-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 hover:bg-blue-900 hover:text-white dark:border-blue-600 dark:text-blue-400 dark:focus:ring-blue-800 dark:hover:bg-blue-600 dark:hover:text-white md:px-3 md:py-1.5"
              data-dismiss-target="#alert-additional-content-1"
              aria-label="Close"
              onClick={cancelOnClick}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Alert;
