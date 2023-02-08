import Posts from '../features/Posts/Posts';
import UserOptions from '../features/Profile/User/UserOptions';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { userOptionDataBookmarks } from '../utils/data';

function Bookmarks() {
  const [selectedOption, setSelectedOption] = useState('Latest');

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <section className="mx-auto max-w-7xl gap-3 py-4 px-3 pb-16 lg:grid lg:grid-cols-[1fr_2fr] lg:px-3 lg:pb-0 xl:px-0">
      {isMobile && <h2 className='text-neutral-900 dark:text-neutral-300 text-xl'>Bookmarks</h2>}
      <section className="mt-7">
        <UserOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} userOptionData={userOptionDataBookmarks} />
      </section>
      <Posts fetchUrl={`/api/posts/bookmarks?sortOption=${selectedOption}&`} queryName={['followersPosts', 'bookmarks' + selectedOption]} />
    </section>
  );
}

export default Bookmarks;
