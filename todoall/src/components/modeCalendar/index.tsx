import React from "react";
import styled from "styled-components";
import { ItodoCardMode, Tmode, Tstatus, Ttodo } from "src/types/types";

const StyledCalendarHeader = styled.div`
	width: 100%;
	display: flex;
	.dotWeek {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 0;
		box-sizing: border-box;
		font-weight: 600;
	}
`;

function CalendarHeader() {
	return (
		<StyledCalendarHeader>
			<p className="dotWeek">월</p>
			<p className="dotWeek">화</p>
			<p className="dotWeek">수</p>
			<p className="dotWeek">목</p>
			<p className="dotWeek">금</p>
		</StyledCalendarHeader>
	);
}

interface IcalendarBlock {
	children: React.ReactNode;
}

const StyledCalendarBlock = styled.div`
	width: calc(20% - 8px);
	height: 100%;
	min-height: 160px;
	background-color: var(--rgba-light-gray);
	border-radius: 4px;
	padding: 16px;
	box-sizing: border-box;
	gap: 16px;
	.date {
		font-weight: 400;
	}
`;

function CalendarBlock({ children }: IcalendarBlock) {
	return <StyledCalendarBlock>{children}</StyledCalendarBlock>;
}

const StyledCalendar = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 2px;
	border-radius: 8px;
	overflow: hidden;
`;

const StyledModeCalendar = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
`;

function ModeCalendar() {
	return (
		<StyledModeCalendar>
			<CalendarHeader />
			<StyledCalendar>
				<CalendarBlock>
					<p className="date">01</p>
				</CalendarBlock>
			</StyledCalendar>
		</StyledModeCalendar>
	);
}

export { ModeCalendar };
