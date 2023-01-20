import { v4 as uuidv4 } from 'uuid';

import Card from '../components/common/Card';
import { trendsData } from '../utils/data';

interface IProps {
  trendData: ITrendData;
}

interface ITrendData {
  name: string;
  tweets: number;
}

function Trends() {
  return (
    <Card headerTitle="Trends for you">
      <TrendsList />
    </Card>
  );
}

function TrendsList() {
  return (
    <section className="flex flex-col gap-6">
      {trendsData.map((trend) => {
        return <Trend key={uuidv4()} trendData={trend} />;
      })}
    </section>
  );
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

export default Trends;
