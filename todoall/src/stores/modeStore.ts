import { create } from "zustand";
import { Tmode } from "src/types/types";
import { Temporal } from "@js-temporal/polyfill";

interface IcontrolStore {
	mode: Tmode;
	setMode: (vMode: Tmode) => void;
	date: Temporal.PlainDate;
	setDate: (vDate: Temporal.PlainDate) => void;
}

const useControlStore = create<IcontrolStore>()((set) => ({
	mode: "all",
	setMode: (vMode: Tmode) => set((state: any) => ({ mode: vMode })),
	date: Temporal.Now.plainDateISO(),
	setDate: (vDate: Temporal.PlainDate) => set((state: any) => ({ date: vDate })),
}));

export { useControlStore };
