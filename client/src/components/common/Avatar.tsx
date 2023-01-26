import { imagePaths } from '../../utils/data';

interface IProps {
  toggleShowTooltip?: () => void;
  big?: boolean;
  small?: boolean;
}

function Avatar(props: IProps) {
  const { toggleShowTooltip, big, small } = props;

  return (
    <img
      className={`${big ? ('h-[150px]' ? small : 'h-[80px]') : 'h-[40px]'} ${
        toggleShowTooltip && 'cursor-pointer'
      } rounded-md`}
      src={imagePaths.avatar}
      alt="avatar"
      onClick={toggleShowTooltip ? () => toggleShowTooltip() : undefined}
    />
  );
}

export default Avatar;
