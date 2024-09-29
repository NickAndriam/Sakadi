import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  onSave,
  children,
}) => {
  if (!isOpen) return null;

  function onSaveAndClose() {
    onSave && onSave();
    onClose && onClose();
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 bg-opacity-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg border shadow-lg p-6 w-11/12 md:w-1/3">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-bold">{title}</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="mt-4">{children}</div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={onSaveAndClose}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
