import { v4 as uuidv4 } from 'uuid';

import { trendsData } from '../../utils/data';
import Trend from '../Trend/Trend';

function TrendsList() {
  return (
    <section className="flex flex-col gap-6">
      {trendsData.map((trend) => {
        return <Trend key={uuidv4()} trendData={trend} />;
      })}
    </section>
  );
}

export default TrendsList;
