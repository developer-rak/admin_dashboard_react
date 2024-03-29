import './Home.css';

import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart />
    </div>
  )
}
