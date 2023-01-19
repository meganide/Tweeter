interface IProps {
  type: 'button' | 'submit';
  text: string;
}

function Button(props: IProps) {
  const { text, type } = props;

  return (
    <button
      className="cursor-pointer rounded-md bg-accent px-4 py-2 text-white hover:bg-sky-700"
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
