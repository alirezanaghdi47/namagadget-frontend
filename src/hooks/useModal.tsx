import { useState } from "react";

const useModal = <T = unknown>(isOpen: boolean = false, data: T | null = null) => {
  const [modal, setModal] = useState<TModalState<T>>({
    isOpen,
    data,
  });

  const changeModal = (value: Partial<T>) =>
      setModal((prevState) => ({
        ...prevState,
        data: { ...prevState.data, ...value },
      }));

  const showModal = (data?: T) => {
    setModal({
      isOpen: true,
      data: data ?? modal.data,
    });
  };

  const toggleModal = (data?: T) => {
    setModal({
      isOpen: !modal.isOpen,
      data: data ?? modal.data,
    });
  };

  const hideModal = () => {
    setModal({
      isOpen: false,
      data: null,
    });
  };

  return { modal, changeModal, showModal, toggleModal, hideModal };
};

export default useModal;

type TModalState<T> = {
  isOpen: boolean;
  data?: T | null;
};