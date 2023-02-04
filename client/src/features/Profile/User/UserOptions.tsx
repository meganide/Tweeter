import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from '../../../components/common/Card';
import UserOption from './UserOption';

function UserOptions() {
  const userOptionData = [
    {
      text: 'Tweets',
    },
    {
      text: 'Tweets & replies',
    },
    {
      text: 'Media',
    },
    {
      text: 'Likes',
    },
  ];

  const [selectedOption, setSelectedOption] = useState('Tweets');

  return (
    <section>
      <Card>
        <section>
          {userOptionData.map((option) => {
            return <UserOption key={uuidv4()} text={option.text} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
          })}
        </section>
      </Card>
    </section>
  );
}

export default UserOptions;
