import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

import Card from '../../components/common/Card';

interface IUserOption {
  text: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

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

  const [selectedOption, setSelectedOption] = useState('Tweets')

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

function UserOption(props: IUserOption) {
  const { text, selectedOption, setSelectedOption } = props;

  return (
    <p className={`cursor-pointer rounded-md ${selectedOption === text ? 'border-blue-500 border-l-4' : ''} p-3 font-semibold text-gray-500 hover:bg-gray-200 dark:text-[#828282] dark:hover:bg-neutral-800`} onClick={() => setSelectedOption(text)}>
      {text}
    </p>
  );
}

export default UserOptions;
