import React from "react";
import styled from "styled-components";
import { ItodoCard, Tmode } from "src/types/types";
import { TodoCard } from "@components/todoCard";
import {
	useControlStore,
	useIntimeArrStore,
	useTodoArrStore,
} from "@stores/store";
import { getContentWidthByMode, getDisplayByMode } from "@hooks/hooks";
import { ModeCalendar, ModeCalendarMin } from "@components/modeCalendar";

const StyledModeListHeader = styled.div<{ mode: Tmode }>`
	display: flex;
	width: 100%;
	justify-content: space-between;
	overflow: hidden;
	padding: 0 10px;
	box-sizing: border-box;
	.content {
		font-weight: 500;
		padding: 2px 0;
		line-height: 24px;
		box-sizing: border-box;
		width: ${(props) => getContentWidthByMode(props.mode)};
	}
	.info {
		display: flex;
		gap: 10px;
		text-align: center;
		& > * {
			padding: 2px 0;
			box-sizing: border-box;
			line-height: 24px;
			width: 80px;
			border-radius: 4px;
		}
		.end,
		.status {
			display: ${(props) => getDisplayByMode(props.mode)};
			justify-content: center;
		}
	}
`;

function ModeListHeader() {
	const { mode } = useControlStore();

	return (
		<StyledModeListHeader mode={mode}>
			<p className="content">할일</p>
			<div className="info">
				<p className="start">시작일</p>
				<p className="until">목표일</p>
				<p className="end">완료일</p>
				{/* <p className="status">상태</p> */}
			</div>
		</StyledModeListHeader>
	);
}

interface ImodeListBody {
	children: React.ReactNode;
}

const StyledModeListBody = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

function ModeListBody({ children }: ImodeListBody) {
	return <StyledModeListBody>{children}</StyledModeListBody>;
}

const StyledModeList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;
`;
const StyledModeListMin = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 640px;
`;

function ModeList() {
	const { intimeArr } = useIntimeArrStore();

	return (
		<div className="modeCnt">
			<ModeCalendarMin />
			<StyledModeList>
				<ModeListHeader />
				<ModeListBody>
					{intimeArr.todoScheduleNroutine &&
					intimeArr.todoScheduleNroutine !== undefined ? (
						intimeArr.todoScheduleNroutine.map((item, idx) => (
							<TodoCard
								uuid={item.uuid}
								mode={"list"}
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
					{intimeArr.todoTaskDoing && intimeArr.todoTaskDoing !== undefined ? (
						intimeArr.todoTaskDoing.map((item, idx) => (
							<TodoCard
								uuid={item.uuid}
								mode={"list"}
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
					{intimeArr.todoTaskBefore && intimeArr.todoTaskBefore !== undefined ? (
						intimeArr.todoTaskBefore.map((item, idx) => (
							<TodoCard
								uuid={item.uuid}
								mode={"list"}
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
					{intimeArr.todoTaskDone && intimeArr.todoTaskDone !== undefined ? (
						intimeArr.todoTaskDone.map((item, idx) => (
							<TodoCard
								uuid={item.uuid}
								mode={"list"}
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
				</ModeListBody>
			</StyledModeList>
		</div>
	);
}

function ModeListMin() {
	const { intimeArr } = useIntimeArrStore();

	return (
		<StyledModeListMin>
			<ModeListHeader />
			<ModeListBody>
				{intimeArr.todoScheduleNroutine &&
				intimeArr.todoScheduleNroutine !== undefined ? (
					intimeArr.todoScheduleNroutine.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={"board"}
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
				{intimeArr.todoTaskDoing && intimeArr.todoTaskDoing !== undefined ? (
					intimeArr.todoTaskDoing.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={"board"}
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
				{intimeArr.todoTaskBefore && intimeArr.todoTaskBefore !== undefined ? (
					intimeArr.todoTaskBefore.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={"board"}
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
				{intimeArr.todoTaskDone && intimeArr.todoTaskDone !== undefined ? (
					intimeArr.todoTaskDone.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={"board"}
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
			</ModeListBody>
		</StyledModeListMin>
	);
}

function ModeListMax() {
	const { intimeArr } = useIntimeArrStore();

	return (
		<StyledModeList>
			<ModeListHeader />
			<ModeListBody>
				{intimeArr.todoScheduleNroutine &&
				intimeArr.todoScheduleNroutine !== undefined ? (
					intimeArr.todoScheduleNroutine.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={"board"}
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
				{intimeArr.todoTaskDoing && intimeArr.todoTaskDoing !== undefined ? (
					intimeArr.todoTaskDoing.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={"board"}
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
				{intimeArr.todoTaskBefore && intimeArr.todoTaskBefore !== undefined ? (
					intimeArr.todoTaskBefore.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={"board"}
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
				{intimeArr.todoTaskDone && intimeArr.todoTaskDone !== undefined ? (
					intimeArr.todoTaskDone.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={"board"}
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
			</ModeListBody>
		</StyledModeList>
	);
}

export { ModeList, ModeListMin, ModeListMax };
