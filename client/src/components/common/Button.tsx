interface IProps {
  type: 'button' | 'submit';
  text: string;
  onClick?: React.MouseEventHandler;
  styles?: string;
}

function Button(props: IProps) {
  const { text, type, onClick, styles } = props;

  return (
    <button
      className={`cursor-pointer rounded-md bg-accent px-4 py-2 text-white hover:bg-sky-700 ${styles}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
