import { create } from "zustand";

interface IOpenModal {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const useOpenModal = create<IOpenModal>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useOpenModal;