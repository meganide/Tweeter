import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  headerTitle?: string;
  children?: JSX.Element[] | JSX.Element;
  isClose?: boolean;
  onClick?: () => void;
}

function Card(props: IProps) {
  const { headerTitle, children, isClose, onClick } = props;

  return (
    <section className="rounded-xl bg-white p-3 shadow-lg dark:bg-secondary-dark">
      {headerTitle && <CardHeader headerTitle={headerTitle} isClose={isClose} onClick={onClick} />}
      {children}
    </section>
  );
}

function CardHeader(props: IProps) {
  const { headerTitle, isClose, onClick } = props;

  return (
    <section>
      <section className="flex justify-between">
        <h2 className="text-xs text-gray-700 dark:text-white">{headerTitle}</h2>
        {isClose && <CloseIcon className='cursor-pointer text-white' onClick={onClick} />}
      </section>
      <hr className="my-3 border-zinc-300 dark:border-border-dark" />
    </section>
  );
}

export default Card;
