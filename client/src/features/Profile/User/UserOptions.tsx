import { v4 as uuidv4 } from 'uuid';

import Card from '../../../components/common/Card';
import UserOption from './UserOption';

interface IProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

function UserOptions(props: IProps) {
  const { selectedOption, setSelectedOption } = props;

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
