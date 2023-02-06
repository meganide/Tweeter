import { useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { useToggle } from '../../../hooks/useToggle';
import UserTooltip from '../../tooltips/UserTooltip/UserTooltip';
import { imagePaths } from '../../../utils/data';
import Avatar from '../../common/Avatar';
import { IThemeContext, ThemeContext } from '../../../contexts/themeContext';

function NavbarIcons() {
  const { darkToggle, toggleTheme } = useContext(ThemeContext) as IThemeContext;
  const { toggle: showTooltip, toggleShow: toggleShowTooltip } = useToggle();

  return (
    <section className="relative flex">
      <img
        className="mr-5 h-[40px] cursor-pointer"
        src={darkToggle ? imagePaths.darkMode : imagePaths.lightMode}
        alt="theme"
        onClick={toggleTheme}
      />
      <Avatar toggleShowTooltip={toggleShowTooltip} />
      {showTooltip && (
        <OutsideClickHandler onOutsideClick={toggleShowTooltip}>
          <UserTooltip toggleShowTooltip={toggleShowTooltip} />
        </OutsideClickHandler>
      )}
    </section>
  );
}

export default NavbarIcons;
