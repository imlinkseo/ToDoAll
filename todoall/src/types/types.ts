import { Temporal } from "@js-temporal/polyfill";

type Tmode = "all" | "board" | "calendar" | "list" | "edit";

type Tstatus = "시작 전" | "진행 중" | "완료" | "기타";

type Ttodo = "업무" | "일정" | "루틴";

type TControlMode = "normal" | "add" | "modify" | "delete";

interface ItodoCard {
	uuid: string;
	type: Ttodo;
	status: Tstatus;
	content: string;
	start: Temporal.PlainDate;
	until?: Temporal.PlainDate;
	end?: Temporal.PlainDate;
}

interface ItodoCardMode extends ItodoCard {
	mode: Tmode;
}

interface IcontrolCard {
	controlMode: TControlMode;
}

export type {
	Tmode,
	Tstatus,
	Ttodo,
	TControlMode,
	ItodoCard,
	IcontrolCard,
	ItodoCardMode,
};
