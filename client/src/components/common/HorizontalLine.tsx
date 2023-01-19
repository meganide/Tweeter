
function HorizontalLine() {
  return (
    <div className="relative inline-flex w-full items-center justify-center">
      <hr className="my-12 h-px w-full border-0 bg-zinc-400 dark:bg-gray-700 sm:max-w-[75%]" />
      <span className="absolute left-1/2 -translate-x-1/2 bg-sky-100 px-3 font-medium text-zinc-400 dark:bg-zinc-800 dark:text-white">
        OR
      </span>
    </div>
  );
}

export default HorizontalLine;
