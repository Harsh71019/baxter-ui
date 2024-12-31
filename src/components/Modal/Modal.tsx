import React from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onSubmit?: () => void;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title = 'Modal Title',
  isOpen,
  onSubmit,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="-inset-4 w-1/3 border border-modal-border shadow-sm">
        <div className="flex items-center justify-between bg-modal-headerbg p-2 text-modal-text text-white">
          <h2 className="text-xs font-bold text-modal-text">{title}</h2>
          <div className="flex h-5 w-5 items-center justify-center border border-transparent hover:border-modal-button-hoverBorder hover:bg-modal-button-hoverbg hover:text-text-modal-text">
            <button onClick={handleClose} className="text-lg font-bold leading-none text-modal-text">
              &times;
            </button>
          </div>
        </div>
        <div className="bg-modal-bg p-4">
          {children}
          <div className="flex justify-between gap-1 rounded-b-lg py-4">
            <button className="modal-button" onClick={handleClose}>
              Continue
            </button>

            <button className="modal-button" onClick={handleSubmit}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
