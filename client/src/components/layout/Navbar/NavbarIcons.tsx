import OutsideClickHandler from 'react-outside-click-handler';

import { useToggle } from '../../../hooks/useToggle';
import UserTooltip from '../../tooltips/UserTooltip';
import { imagePaths } from '../../../utils/data';
import Avatar from '../../common/Avatar';
import { IProps } from './Navbar';

function NavbarIcons(props: IProps) {
  const { setDarkToggle, darkToggle } = props;

  const { toggle: showTooltip, toggleShow: toggleShowTooltip } = useToggle();

  return (
    <section className="relative flex">
      <img
        className="mr-5 h-[40px] cursor-pointer"
        src={darkToggle ? imagePaths.darkMode : imagePaths.lightMode}
        alt="theme"
        onClick={setDarkToggle}
      />
      <Avatar toggleShowTooltip={toggleShowTooltip} />
      {showTooltip && (
        <OutsideClickHandler onOutsideClick={toggleShowTooltip}>
          <UserTooltip />
        </OutsideClickHandler>
      )}
    </section>
  );
}

export default NavbarIcons;
