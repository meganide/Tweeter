import CloseIcon from '@mui/icons-material/Close';
import { IProps } from './Card';

function CardHeader(props: IProps) {
  const { headerTitle, isClose, onClick } = props;

  return (
    <section>
      <section className="flex justify-between">
        <h2 className="text-xs text-gray-700 dark:text-white">{headerTitle}</h2>
        {isClose && (
          <CloseIcon
            className="cursor-pointer dark:text-white"
            onClick={onClick}
          />
        )}
      </section>
      <hr className="my-3 border-zinc-300 dark:border-border-dark" />
    </section>
  );
}

export default CardHeader;
