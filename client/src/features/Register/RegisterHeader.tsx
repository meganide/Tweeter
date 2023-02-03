import Logo from "../../components/common/Logo";

function RegisterHeader() {
  return (
    <article className="mb-16 flex items-center justify-center gap-5">
      <Logo />
      <h1 className="text-2xl dark:text-white md:text-3xl">Tweeter</h1>
    </article>
  );
}

export default RegisterHeader