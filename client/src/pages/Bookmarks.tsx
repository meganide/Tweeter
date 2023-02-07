import { useState } from 'react';
import Posts from '../features/Posts/Posts';
import UserOptions from '../features/Profile/User/UserOptions';
import { userOptionDataBookmarks } from '../utils/data';

function Bookmarks() {
  const [selectedOption, setSelectedOption] = useState('Latest');

  return (
    <section className="mx-auto max-w-7xl gap-3 py-4 px-3 pb-16 lg:grid lg:grid-cols-[1fr_2fr] lg:px-3 lg:pb-0 xl:px-0">
      <section className='mt-7'>
        <UserOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} userOptionData={userOptionDataBookmarks} />
      </section>
      <Posts fetchUrl={`/api/posts/bookmarks/${selectedOption}?`} queryName={['followersPosts', 'bookmarks' + selectedOption]} />
    </section>
  );
}

export default Bookmarks;
