import { Temporal } from "@js-temporal/polyfill";
import { Tmode, Tstatus, Ttodo } from "src/types/types";

function makeDateString(date: Temporal.PlainDate | undefined): string {
	return date instanceof Temporal.PlainDate
		? date.toString().replaceAll("-", "/").slice(-8)
		: "-";
}

function addZero(value: number): string {
	return value < 10 ? `0${value.toString()}` : value.toString();
}

function getContentWidthByMode(mode: Tmode): string {
	switch (mode) {
		case "all":
			return "calc(100% - 180px)";
		case "board":
			return "calc(100% - 180px)";
		case "calendar":
			return "calc(100%)";
		case "list":
			return "calc(100% - 360px)";
		default:
			return "calc(100% - 180px)";
	}
}

function getBGCbyTypeNstatus(type: Ttodo, status: Tstatus): string {
	switch (type) {
		case "업무":
			return getBGCbyStatus(status);
		case "일정":
			return "var(--point-2)";
		case "루틴":
			return "var(--point-3)";
		default:
			return "var(--mono-white)";
	}
}

function getBGCbyStatus(type: Tstatus): string {
	switch (type) {
		case "시작 전":
			return "transparent";
		case "진행 중":
			return "var(--rgba-deep-gray)";
		case "완료":
			return "var(--point-1-light)";
		case "기타":
			return "transparent";
		default:
			return "transparent";
	}
}

function getDisplayByMode(mode: Tmode): string {
	switch (mode) {
		case "all":
			return "none";
		case "board":
			return "none";
		case "calendar":
			return "none";
		case "list":
			return "flex";
		case "edit":
			return "flex";
		default:
			return "none";
	}
}

function getOpacityByModeNstatus(mode: Tmode, status: Tstatus): string {
	if (mode === "list") {
		return "1";
	} else {
		if (status === "완료") {
			return "1";
		} else {
			return "0.4";
		}
	}
}

function getUntilORendByModeNstatus(
	mode: Tmode,
	status: Tstatus,
	until?: Temporal.PlainDate,
	end?: Temporal.PlainDate
): string {
	if (mode === "list") {
		return until instanceof Temporal.PlainDate ? makeDateString(until) : "-";
	} else {
		if (status === "완료") {
			return end instanceof Temporal.PlainDate ? makeDateString(end) : "-";
		} else if (status === "기타") {
			return "-";
		} else {
			return until instanceof Temporal.PlainDate ? makeDateString(until) : "-";
		}
	}
}

function isInTime(
	current: Temporal.PlainDate,
	start: Temporal.PlainDate,
	until?: Temporal.PlainDate,
	end?: Temporal.PlainDate
): boolean {
	let startResult: number = Temporal.PlainDate.compare(current, start);
	let endResult: number;
	if (until instanceof Temporal.PlainDate && end instanceof Temporal.PlainDate) {
		endResult = Temporal.PlainDate.compare(current, end);
		return startResult >= 0 && endResult <= 0 ? true : false;
	} else if (until instanceof Temporal.PlainDate) {
		endResult = Temporal.PlainDate.compare(current, until);
		return startResult >= 0 && endResult <= 0 ? true : false;
	} else {
		if (startResult === 0) {
			return true;
		} else {
			return false;
		}
	}
}

function makeCalendarBlockClassName(
	date: Temporal.PlainDate,
	today: Temporal.PlainDate,
	calendarDate: Temporal.PlainDate
): string {
	if (today.equals(calendarDate)) {
		return "today";
	} else if (date.equals(calendarDate)) {
		return "selected";
	} else if (calendarDate.month !== date.month) {
		return "notThisMonth";
	} else {
		return "";
	}
}

export {
	makeDateString,
	addZero,
	getContentWidthByMode,
	getBGCbyTypeNstatus,
	getBGCbyStatus,
	getDisplayByMode,
	getOpacityByModeNstatus,
	getUntilORendByModeNstatus,
	isInTime,
	makeCalendarBlockClassName,
};
