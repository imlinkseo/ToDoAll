import { create } from "zustand";
import { Tmode, ItodoCard } from "src/types/types";
import { Temporal } from "@js-temporal/polyfill";
import { isInTime } from "@hooks/hooks";

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

interface ICalendarMonth {
	month: Temporal.PlainDate[];
}

const useCalendarMonth = create<ICalendarMonth>((set) => {
	const { today } = useControlStore.getState();
	const from = today.subtract({ days: 15 });
	const month = [];
	for (let i = 0; i <= 30; i++) {
		month.push(from.add({ days: i }));
	}
	return {
		month,
		setFromTo: (monthData: Temporal.PlainDate[]) =>
			set((state: any) => ({
				month: monthData,
			})),
	};
});

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
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 19 }),
			until: Temporal.PlainDate.from({ year: 2024, month: 8, day: 29 }),
		},
		{
			uuid: "2",
			type: "업무",
			status: "진행 중",
			content: "todoCard 개발",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 14 }),
			until: Temporal.PlainDate.from({ year: 2024, month: 8, day: 16 }),
		},
		{
			uuid: "3",
			type: "업무",
			status: "완료",
			content: "Header 개발",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 1 }),
			until: Temporal.PlainDate.from({ year: 2024, month: 8, day: 14 }),
			end: Temporal.PlainDate.from({ year: 2024, month: 8, day: 20 }),
		},
		{
			uuid: "4",
			type: "루틴",
			status: "기타",
			content: "주간 회의",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 7 }),
		},
		{
			uuid: "5",
			type: "일정",
			status: "기타",
			content: "점심 약속",
			start: Temporal.PlainDate.from({ year: 2024, month: 8, day: 11 }),
		},
	],
	setTodoArr: (data: ItodoCard) =>
		set((state: any) => ({
			todoArr: state.todoArr.map((item: any) =>
				item.uuid === data.uuid ? { ...item, ...data } : item
			),
		})),
}));

interface IintimeArr {
	intimeArr: {
		todoTaskBefore: ItodoCard[] | null | undefined;
		todoTaskDoing: ItodoCard[] | null | undefined;
		todoTaskDone: ItodoCard[] | null | undefined;
		todoScheduleNroutine: ItodoCard[] | null | undefined;
	};
	setIntimeArr: (date: Temporal.PlainDate) => void;
}

const useIntimeArrStore = create<IintimeArr>((set) => {
	const { date } = useControlStore.getState();
	const { todoArr } = useTodoArrStore.getState();
	const intimeArr = {
		todoTaskBefore: todoArr.filter(
			(item) =>
				item.type === "업무" &&
				item.status === "시작 전" &&
				isInTime(date, item.start, item.until, item.end) === true
		),
		todoTaskDoing: todoArr.filter(
			(item) =>
				item.type === "업무" &&
				item.status === "진행 중" &&
				isInTime(date, item.start, item.until, item.end) === true
		),
		todoTaskDone: todoArr.filter(
			(item) =>
				item.type === "업무" &&
				item.status === "완료" &&
				isInTime(date, item.start, item.until, item.end) === true
		),
		todoScheduleNroutine: todoArr.filter(
			(item) =>
				item.type !== "업무" &&
				isInTime(date, item.start, item.until, item.end) === true
		),
	};

	return {
		intimeArr,
		setIntimeArr: (date: Temporal.PlainDate) =>
			set({
				intimeArr: {
					todoTaskBefore: todoArr.filter(
						(item) =>
							item.type === "업무" &&
							item.status === "시작 전" &&
							isInTime(date, item.start, item.until, item.end) === true
					),
					todoTaskDoing: todoArr.filter(
						(item) =>
							item.type === "업무" &&
							item.status === "진행 중" &&
							isInTime(date, item.start, item.until, item.end) === true
					),
					todoTaskDone: todoArr.filter(
						(item) =>
							item.type === "업무" &&
							item.status === "완료" &&
							isInTime(date, item.start, item.until, item.end) === true
					),
					todoScheduleNroutine: todoArr.filter(
						(item) =>
							item.type !== "업무" &&
							isInTime(date, item.start, item.until, item.end) === true
					),
				},
			}),
	};
});
export {
	useControlStore,
	useCalendarMonth,
	useTodoArrStore,
	useIntimeArrStore,
};
