import { MdClose } from "react-icons/md";

const Modal = ({ open, onClose, children }) => {
  return (
    /* backdrop */
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-white/10" : "invisible"}
      `}
    >
      {/* modal */}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-zinc-900 rounded-xl shadow p-10 transition-all w-[50vw] overflow-auto
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <h2 className="text-center mb-8 text-3xl">Edit your Article</h2>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-4xl text-gray-400   hover:text-gray-200"
        >
          <MdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
