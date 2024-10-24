import { create } from "zustand";

interface IActiveRol {
    activeRol: string;
    setActiveRol: (activeRol: string) => void;
}

const useActiveRol = create<IActiveRol>((set) => ({
    activeRol: "",
    setActiveRol: (activeRol) => set({  activeRol }),
}));

export default useActiveRol;