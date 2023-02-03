interface IProps {
  trendData: ITrendData;
}

interface ITrendData {
  name: string;
  tweets: number;
}

function Trend(props: IProps) {
  const { trendData } = props;

  return (
    <article>
      <h3 className="dark:text-neutral-300">{trendData.name}</h3>
      <h4 className="mt-1 text-xs font-normal dark:text-neutral-500">{trendData.tweets} Tweets</h4>
    </article>
  );
}

export default Trend;
