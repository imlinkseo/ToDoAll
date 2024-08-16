import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Prev } from "@images/prev.svg";
import { ReactComponent as Next } from "@images/next.svg";
import {
	useCalendarMonth,
	useControlStore,
	useIntimeArrStore,
} from "@stores/store";
import { addZero } from "@hooks/hooks";
import { Temporal } from "@js-temporal/polyfill";

const StyledDateControl = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: calc(var(--base-unit) * 2);
`;

function DateControl() {
	const { date, setDate, today } = useControlStore();
	const { setIntimeArr } = useIntimeArrStore();

	function prevDate(e: React.MouseEvent) {
		if (
			Temporal.PlainDate.compare(
				date.subtract({ days: 1 }),
				today.subtract({ days: 15 })
			) > -1
		) {
			setDate(date.subtract({ days: 1 }));
		}
	}

	function nextDate(e: React.MouseEvent) {
		if (
			Temporal.PlainDate.compare(date.add({ days: 1 }), today.add({ days: 15 })) <
			1
		) {
			setDate(date.add({ days: 1 }));
		}
	}

	useEffect(() => {
		setIntimeArr(date);
	}, [date]);

	return (
		<StyledDateControl className="dateControl">
			<Prev className="pointer" onClick={prevDate} />
			<p className="title">{addZero(date.year)}</p>
			<p className="title">{addZero(date.month)}</p>
			<p className="title">{addZero(date.day)}</p>
			<Next className="pointer" onClick={nextDate} />
		</StyledDateControl>
	);
}

export { DateControl };
