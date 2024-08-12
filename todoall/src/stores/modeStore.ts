import { create } from "zustand";
import { Tmode } from "src/types/types";

interface IcontrolStore {
  mode: Tmode;
  setMode: (vMode: Tmode) => void;
  date: Date;
  setDate: (vDate: Date) => void;
}

const useControlStore = create<IcontrolStore>()((set) => ({
  mode: "all",
  setMode: (vMode: Tmode) => set((state: any) => ({ mode: vMode })),
  date: new Date(),
  setDate: (vDate: Date) => set((state: any) => ({ date: vDate })),
}));

export { useControlStore };
