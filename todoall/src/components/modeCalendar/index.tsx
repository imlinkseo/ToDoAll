import React from "react";
import styled from "styled-components";
import { ModeList, ModeListMin } from "@components/modeList";
import { Temporal } from "@js-temporal/polyfill";
import {
	useCalendarMonth,
	useControlStore,
	useTodoArrStore,
} from "@stores/store";
import { addZero, isInTime, makeCalendarBlockClassName } from "@hooks/hooks";
import { ItodoCardMode, Tstatus, Ttodo } from "src/types/types";
import { TodoCard } from "@components/todoCard";

const StyledCalendarTodoCard = styled.li<{ type: Ttodo; status: Tstatus }>``;

function CalendarTodoCard({
	uuid,
	mode,
	type,
	status,
	content,
	start,
	until,
	end,
}: ItodoCardMode): JSX.Element {
	return (
		<StyledCalendarTodoCard
			type={type}
			status={status}
			content={content}
		></StyledCalendarTodoCard>
	);
}

interface IcalndarTodoBody {
	children: React.ReactNode;
}

const StyledCalendarTodoBody = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4px;
	height: 100%;
`;

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
	calendarDate: Temporal.PlainDate;
	children: React.ReactNode;
}

const StyledCalendarBlock = styled.div`
	width: calc((100% - 8px) / 5);
	min-height: 140px;
	background-color: var(--rgba-light-gray);
	border-radius: 4px;
	padding: 16px;
	box-sizing: border-box;
	gap: 16px;
	display: flex;
	flex-direction: column;
	&.selected {
		opacity: 100%;
		background-color: var(--rgba-deep-gray);
	}
	&.today {
		background-color: var(--point-1-deep);
	}
	&.notThisMonth {
		opacity: 50%;
	}
	.date {
		font-weight: 400;
	}
`;

function CalendarBlock({ calendarDate, children }: IcalendarBlock) {
	const { date, today } = useControlStore();
	return (
		<StyledCalendarBlock
			className={makeCalendarBlockClassName(date, today, calendarDate)}
		>
			{children}
		</StyledCalendarBlock>
	);
}

const StyledCalendar = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 2px;
	align-items: stretch;
	border-radius: 8px;
	overflow: hidden;
`;

const StyledModeCalendar = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
`;
const StyledModeCalendarMin = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 640px;
`;

function ModeCalendar() {
	const { month } = useCalendarMonth();
	const { todoArr } = useTodoArrStore();

	return (
		<div className="modeCnt">
			<StyledModeCalendar>
				<CalendarHeader />
				<StyledCalendar>
					{month.map((day: Temporal.PlainDate, idx: number) => (
						<CalendarBlock calendarDate={day} key={idx}>
							<p className="date">{addZero(day.day)}</p>
							<StyledCalendarTodoBody>
								{todoArr && todoArr !== undefined ? (
									todoArr
										.filter(
											(inTime) =>
												isInTime(day, inTime.start, inTime.until, inTime.end) === true
										)
										.map((item, idx) => (
											<TodoCard
												uuid={item.uuid}
												mode={"calendar"}
												key={idx}
												type={item.type}
												status={item.status}
												content={item.content}
												start={item.start}
												until={item.until}
												end={item.end}
											/>
										))
								) : (
									<></>
								)}
							</StyledCalendarTodoBody>
						</CalendarBlock>
					))}
				</StyledCalendar>
			</StyledModeCalendar>
			<ModeListMin />
		</div>
	);
}

function ModeCalendarMin() {
	const { month } = useCalendarMonth();
	const { todoArr } = useTodoArrStore();

	return (
		<StyledModeCalendarMin>
			<CalendarHeader />
			<StyledCalendar>
				{month.map((day: Temporal.PlainDate, idx: number) => (
					<CalendarBlock calendarDate={day} key={idx}>
						<p className="date">{addZero(day.day)}</p>
						<StyledCalendarTodoBody>
							{todoArr && todoArr !== undefined ? (
								todoArr
									.filter(
										(inTime) =>
											isInTime(day, inTime.start, inTime.until, inTime.end) === true
									)
									.map((item, idx) => (
										<TodoCard
											uuid={item.uuid}
											mode={"calendar"}
											key={idx}
											type={item.type}
											status={item.status}
											content={item.content}
											start={item.start}
											until={item.until}
											end={item.end}
										/>
									))
							) : (
								<></>
							)}
						</StyledCalendarTodoBody>
					</CalendarBlock>
				))}
			</StyledCalendar>
		</StyledModeCalendarMin>
	);
}

function ModeCalendarMax() {
	const { month } = useCalendarMonth();
	const { todoArr } = useTodoArrStore();

	return (
		<StyledModeCalendar>
			<CalendarHeader />
			<StyledCalendar>
				{month.map((day: Temporal.PlainDate, idx: number) => (
					<CalendarBlock calendarDate={day} key={idx}>
						<p className="date">{addZero(day.day)}</p>
						<StyledCalendarTodoBody>
							{todoArr && todoArr !== undefined ? (
								todoArr
									.filter(
										(inTime) =>
											isInTime(day, inTime.start, inTime.until, inTime.end) === true
									)
									.map((item, idx) => (
										<TodoCard
											uuid={item.uuid}
											mode={"calendar"}
											key={idx}
											type={item.type}
											status={item.status}
											content={item.content}
											start={item.start}
											until={item.until}
											end={item.end}
										/>
									))
							) : (
								<></>
							)}
						</StyledCalendarTodoBody>
					</CalendarBlock>
				))}
			</StyledCalendar>
		</StyledModeCalendar>
	);
}

export { ModeCalendar, ModeCalendarMin, ModeCalendarMax };
