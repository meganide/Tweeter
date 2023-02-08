import { makeRequest } from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useState } from 'react';

function Search() {
  const [searchUserQuery, setSearchUserQuery] = useState('');

  const navigate = useNavigate();

  function navigateToProfile(name: string) {
    setSearchUserQuery('');
    navigate('/profile/' + name);
  }

  const { data: usersData } = useQuery(searchUserQuery, async () => {
    if (searchUserQuery.length > 0) {
      const users = await makeRequest.get('/api/users/findmany?name=' + searchUserQuery);
      return users.data;
    }
  });

  return (
    <section className="relative">
      <input
        className="h-[40px] max-w-[150px] rounded-lg border border-neutral-300 bg-transparent p-2 text-xs outline-none dark:border-neutral-700 md:text-sm"
        placeholder="Search for a user..."
        type="text"
        value={searchUserQuery}
        onChange={(e) => setSearchUserQuery(e.target.value)}
      />
      {usersData && usersData?.length > 0 && (
        <ul className="absolute w-full rounded-md border bg-white dark:border-neutral-700 dark:bg-secondary-dark">
          {usersData?.map((user: { name: string }) => {
            return (
              <li className="cursor-pointer rounded-md p-2 hover:bg-gray-200 dark:hover:bg-neutral-800" onClick={() => navigateToProfile(user.name)}>
                {user.name}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default Search;
