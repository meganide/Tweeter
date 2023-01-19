import { Link } from 'react-router-dom';
import { imagePaths } from '../../utils/data';

function Logo() {
  return (
    <Link to="/">
      <img className="w-[30px] cursor-pointer" src={imagePaths.logo} alt="logo" />
    </Link>
  );
}

export default Logo;
