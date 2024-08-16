import React from "react";
import { ModeBoard } from "@components/modeBoard";
import { ModeListMax } from "@components/modeList";
import { ModeCalendarMax } from "@components/modeCalendar";

function ModeAll() {
	return (
		<div className="allCnt">
			<ModeBoard />
			<div className="modeCnt">
				<ModeCalendarMax />
				<ModeListMax />
			</div>
		</div>
	);
}

export { ModeAll };
