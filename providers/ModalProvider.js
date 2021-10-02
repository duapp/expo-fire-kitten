import React, { createContext, useCallback, useContext, useState } from 'react';
import Modal from '../components/common/Modal';

export const ModalContext = createContext();

export function ModalProvider(props) {
  // modal JSX to pop
  const [modal, setModal] = useState();
  const { children } = props;

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  return (
    <ModalContext.Provider
      value={{
        showModal: setModal,
        closeModal,
      }}
    >
      {children}
      {modal && <Modal modal={modal} closeModal={closeModal} />}
    </ModalContext.Provider>
  );
}

// shortcut hook
export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used inside ModalProvider');
  }

  return context;
}
