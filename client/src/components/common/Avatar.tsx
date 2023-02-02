import { useContext } from 'react';

import { AuthContext, IAuthContext } from '../../contexts/authContext';
import { imagePaths } from '../../utils/data';

interface IProps {
  toggleShowTooltip?: () => void;
  height?: string;
  imgSrc?: string | null;
}

function Avatar(props: IProps) {
  const { currentUser } = useContext(AuthContext) as IAuthContext;
  const { toggleShowTooltip, height, imgSrc } = props;

  return (
    <img
      className={`${height ? height : 'h-[50px] w-[50px]'} ${
        toggleShowTooltip && 'cursor-pointer'
      } rounded-md object-cover object-center`}
      src={imgSrc ? imgSrc : currentUser?.profilePic ? currentUser.profilePic : imagePaths.avatar}
      alt="avatar"
      onClick={toggleShowTooltip ? () => toggleShowTooltip() : undefined}
    />
  );
}

export default Avatar;
