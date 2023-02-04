import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';

import { links } from '../../../utils/data';

function MobileBottomBar() {
  return (
    <MediaQuery maxWidth={768}>
      <section className="fixed bottom-0 flex h-[60px] w-full items-center justify-center bg-main-default p-1 px-3 shadow-sm shadow-black dark:bg-main-dark dark:shadow-white">
        <section className="flex w-full items-center justify-center">
          <section className="flex w-full justify-around">
            {links.map((link) => {
              return (
                <Link key={uuidv4()} to={link.pathname}>
                  {link.icon}
                </Link>
              );
            })}
          </section>
        </section>
      </section>
    </MediaQuery>
  );
}

export default MobileBottomBar;