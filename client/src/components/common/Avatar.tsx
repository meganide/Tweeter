import { imagePaths } from '../../utils/data';

interface IProps {
  toggleShowTooltip?: () => void;
}

function Avatar(props: IProps) {
  const { toggleShowTooltip } = props;

  return (
    <img
      className={`h-[40px] ${toggleShowTooltip && 'cursor-pointer'} rounded-md`}
      src={imagePaths.avatar}
      alt="avatar"
      onClick={toggleShowTooltip ? () => toggleShowTooltip() : undefined}
    />
  );
}

export default Avatar;
