import { imagePaths } from '../../utils/data';

interface IProps {
  toggleShowTooltip?: () => void;
  height?: string;
}

function Avatar(props: IProps) {
  const { toggleShowTooltip, height } = props;

  return (
    <img
      className={`${height ? height : 'h-[40px]'} ${
        toggleShowTooltip && 'cursor-pointer'
      } rounded-md`}
      src={imagePaths.avatar}
      alt="avatar"
      onClick={toggleShowTooltip ? () => toggleShowTooltip() : undefined}
    />
  );
}

export default Avatar;
