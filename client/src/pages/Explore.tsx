import { useState } from 'react';

import Posts from '../features/Posts/Posts';
import UserOptions from '../features/Profile/User/UserOptions';
import { userOptionDataExplore } from '../utils/data';

function Explore() {
  const [selectedOption, setSelectedOption] = useState('Latest');

  return (
    <section className="mx-auto max-w-7xl gap-3 py-4 px-3 pb-16 lg:grid lg:grid-cols-[1fr_2fr] lg:px-3 lg:pb-0 xl:px-0">
      <section className="mt-7">
        <UserOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} userOptionData={userOptionDataExplore} />
      </section>
      <Posts fetchUrl={`/api/posts?sortOption=${selectedOption}&`} queryName={['followersPosts', 'explore' + selectedOption]} />
    </section>
  );
}

export default Explore;
