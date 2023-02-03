import { v4 as uuidv4 } from 'uuid';
import MediaQuery from 'react-responsive';

import { postOptionsData } from "../../utils/data";

function PostOptions() {
  return (
    <section className="my-3 flex border-b border-t dark:border-border-dark">
      {postOptionsData.map((option) => {
        return (
          <article
            key={uuidv4()}
            className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-3 hover:bg-gray-200 dark:hover:bg-neutral-800"
          >
            {option.icon}
            <MediaQuery minWidth={640}>
              <p className={`text-[${option.color}]`}>{option.text}</p>
            </MediaQuery>
          </article>
        );
      })}
    </section>
  );
}

export default PostOptions;