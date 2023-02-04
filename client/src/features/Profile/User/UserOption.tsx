interface IProps {
  text: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

function UserOption(props: IProps) {
  const { text, selectedOption, setSelectedOption } = props;

  return (
    <p
      className={`cursor-pointer rounded-md ${
        selectedOption === text ? 'border-l-4 border-blue-500' : ''
      } p-3 font-semibold text-gray-500 hover:bg-gray-200 dark:text-[#828282] dark:hover:bg-neutral-800`}
      onClick={() => setSelectedOption(text)}
    >
      {text}
    </p>
  );
}

export default UserOption;
