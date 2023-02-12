import CardHeader from './CardHeader';

export interface IProps {
  headerTitle?: string;
  children?: JSX.Element[] | JSX.Element;
  isClose?: boolean;
  onClick?: () => void;
  styles?: string;
}

function Card(props: IProps) {
  const { headerTitle, children, isClose, onClick, styles } = props;

  return (
    <section
      className={`rounded-xl bg-white p-3 shadow-lg dark:bg-secondary-dark ${styles}`}
    >
      {headerTitle && (
        <CardHeader
          headerTitle={headerTitle}
          isClose={isClose}
          onClick={onClick}
        />
      )}
      {children}
    </section>
  );
}

export default Card;
