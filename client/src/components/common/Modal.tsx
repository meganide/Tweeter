
interface IProps {
  children: JSX.Element | JSX.Element[];
  onRequestClose: () => void;
  shouldShow: boolean;
}

function Modal(props: IProps) {
  const { children, onRequestClose, shouldShow } = props;

  return shouldShow ? (
    <section className="fixed flex justify-center place-items-center left-0 top-0 z-10 mt-14 h-full w-auto overflow-auto bg-[rgba(0,0,0,0.5)]" onClick={onRequestClose}>
      <section className='flex justify-center' onClick={(e) => e.stopPropagation()}>
        {children}
      </section>
    </section>
  ) : null;
}

export default Modal;
