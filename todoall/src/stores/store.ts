import { create } from "zustand";
import { Tmode, ItodoCard } from "src/types/types";
import { Temporal } from "@js-temporal/polyfill";

interface IcontrolStore {
	mode: Tmode;
	setMode: (vMode: Tmode) => void;
	today: Temporal.PlainDate;
	date: Temporal.PlainDate;
	setDate: (vDate: Temporal.PlainDate) => void;
}

const useControlStore = create<IcontrolStore>()((set) => ({
	mode: "all",
	setMode: (vMode: Tmode) => set((state: any) => ({ mode: vMode })),
	today: Temporal.Now.plainDateISO(),
	date: Temporal.Now.plainDateISO(),
	setDate: (vDate: Temporal.PlainDate) => set((state: any) => ({ date: vDate })),
}));

interface ItodoArrStore {
	todoArr: ItodoCard[];
	setTodoArr: (data: ItodoCard) => void;
}

const useTodoArrStore = create<ItodoArrStore>()((set) => ({
	todoArr: [
		{
			uuid: "1",
			type: "업무",
			status: "시작 전",
			content: "modeBoard 개발",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 1 }),
			until: Temporal.PlainDate.from({ year: 2024, month: 8, day: 14 }),
			end: Temporal.PlainDate.from({ year: 2024, month: 8, day: 15 }),
		},
		{
			uuid: "2",
			type: "업무",
			status: "진행 중",
			content: "todoCard 개발",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 1 }),
			until: Temporal.PlainDate.from({ year: 2024, month: 8, day: 14 }),
			end: Temporal.PlainDate.from({ year: 2024, month: 8, day: 15 }),
		},
		{
			uuid: "3",
			type: "업무",
			status: "완료",
			content: "Header 개발",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 1 }),
			until: Temporal.PlainDate.from({ year: 2024, month: 8, day: 14 }),
			end: Temporal.PlainDate.from({ year: 2024, month: 8, day: 15 }),
		},
		{
			uuid: "4",
			type: "루틴",
			status: "기타",
			content: "주간 회의",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 1 }),
		},
		{
			uuid: "5",
			type: "일정",
			status: "기타",
			content: "점심 약속",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 1 }),
		},
	],
	setTodoArr: (data: ItodoCard) =>
		set((state: any) => ({
			todoArr: state.todoArr.map((item: any) =>
				item.uuid === data.uuid ? { ...item, ...data } : item
			),
		})),
}));

export { useControlStore, useTodoArrStore };
