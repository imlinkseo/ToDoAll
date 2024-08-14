import React from "react";
import styled from "styled-components";
import { ReactComponent as Prev } from "@images/prev.svg";
import { ReactComponent as Next } from "@images/next.svg";
import { useControlStore } from "@stores/store";

const StyledDateControl = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: calc(var(--base-unit) * 2);
`;

function DateControl() {
	const { date, setDate } = useControlStore();

	function addZero(value: number): string {
		return value < 10 ? `0${value.toString()}` : value.toString();
	}

	function prevDate(e: React.MouseEvent) {
		setDate(date.add({ days: -1 }));
	}

	function nextDate(e: React.MouseEvent) {
		setDate(date.add({ days: 1 }));
	}

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
