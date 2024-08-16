import { ModeCalendar } from "@components/modeCalendar";
import { ModeList } from "@components/modeList";
import React from "react";

export default function ModeCalendarNlist() {
	return (
		<div className="modeCnt">
			<ModeCalendar />
			<ModeList />
		</div>
	);
}
