interface IProps {
  headerTitle?: string;
  children?: JSX.Element[] | JSX.Element;
}

function Card(props: IProps) {
  const { headerTitle, children } = props;

  return (
    <section className="rounded-xl bg-white p-3 shadow-lg dark:bg-secondary-dark">
      {headerTitle && <CardHeader headerTitle={headerTitle} />}
      {children}
    </section>
  );
}

function CardHeader(props: IProps) {
  const { headerTitle } = props;

  return (
    <section>
      <h2 className="text-xs text-gray-700 dark:text-white">{headerTitle}</h2>
      <hr className="my-3 border-zinc-300 dark:border-border-dark" />
    </section>
  );
}

export default Card;
