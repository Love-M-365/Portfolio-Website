import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
   <div
  className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999] px-4"
  onClick={onClose}
>
  <div
    className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-6 relative"
    onClick={(e) => e.stopPropagation()}
  >
    {children}
  </div>
</div>
,
    document.body
  );
};

export default Modal;
