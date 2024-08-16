import React from "react";
import { ModeBoard } from "@components/modeBoard";
import { ModeList } from "@components/modeList";
import { ModeCalendar } from "@components/modeCalendar";

function ModeAll() {
	return (
		<div className="allCnt">
			<ModeBoard />
			<div className="modeCnt">
				<ModeCalendar />
				<ModeList />
			</div>
		</div>
	);
}

export { ModeAll };
