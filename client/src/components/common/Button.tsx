interface IProps {
  type: 'button' | 'submit';
  text: string;
  onClick?: React.MouseEventHandler;
}

function Button(props: IProps) {
  const { text, type, onClick } = props;

  return (
    <button
      className="cursor-pointer rounded-md bg-accent px-4 py-2 text-white hover:bg-sky-700"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
