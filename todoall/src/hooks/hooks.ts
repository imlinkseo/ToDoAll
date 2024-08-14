import { Temporal } from "@js-temporal/polyfill";
import { Tmode, Tstatus, Ttodo } from "src/types/types";

function makeDateString(date: Temporal.PlainDate | undefined): string {
	return date instanceof Temporal.PlainDate
		? date.toString().replaceAll("-", "/").slice(-8)
		: "-";
}

function getContentWidthByMode(mode: Tmode): string {
	switch (mode) {
		case "all":
			return "calc(100% - 180px)";
		case "board":
			return "calc(100% - 180px)";
		case "calendar":
			return "calc(100% - 180px)";
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

export {
	makeDateString,
	getContentWidthByMode,
	getBGCbyTypeNstatus,
	getBGCbyStatus,
	getDisplayByMode,
};
