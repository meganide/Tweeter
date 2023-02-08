import { Link, useLocation } from 'react-router-dom';

import MediaQuery from 'react-responsive';
import { links } from '../../../utils/data';
import { v4 as uuidv4 } from 'uuid';

function DesktopLinks() {
  const location = useLocation();

  return (
    <MediaQuery minWidth={768}>
      <section className="flex gap-20">
        {links.map((link) => {
          return (
            <Link
              key={uuidv4()}
              className={`font-[poppins] font-semibold text-[#828282] ${
                location.pathname === link.pathname && 'underline decoration-accent decoration-2 underline-offset-8'
              }`}
              to={link.pathname}
            >
              {link.name}
            </Link>
          );
        })}
      </section>
    </MediaQuery>
  );
}

export default DesktopLinks;
