import React from "react";
import styled from "styled-components";
import { Tstatus, ItodoCard } from "src/types/types";
import { TodoCard } from "@components/todoCard";
import { useControlStore, useTodoArrStore } from "@stores/store";

interface IboardSection {
	children: React.ReactNode;
	status: Tstatus;
}

const StyledBoardSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;
	.boardTitle {
		padding: 0 8px;
		font-weight: 600;
	}
	.boardBox {
		background-color: var(--rgba-light-gray);
		padding: 16px;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
`;

function BoardSection({ children, status }: IboardSection): JSX.Element {
	return (
		<StyledBoardSection>
			<p className="boardTitle">{status}</p>
			<ul className="boardBox">{children}</ul>
		</StyledBoardSection>
	);
}

const StyledModeBoard = styled.div`
	display: flex;
	min-height: calc(100vh - 432px);
	width: 100%;
	gap: 16px;
`;

function ModeBoard() {
	const { mode } = useControlStore();
	const { todoArr } = useTodoArrStore();
	const todoTaskBefore: ItodoCard[] | null | undefined = todoArr.filter(
		(item) => item.type === "업무" && item.status === "시작 전"
	);
	const todoTaskDoing: ItodoCard[] | null | undefined = todoArr.filter(
		(item) => item.type === "업무" && item.status === "진행 중"
	);
	const todoTaskDone: ItodoCard[] | null | undefined = todoArr.filter(
		(item) => item.type === "업무" && item.status === "완료"
	);
	const todoScheduleNroutine: ItodoCard[] | null | undefined = todoArr.filter(
		(item) => item.type !== "업무"
	);

	return (
		<StyledModeBoard>
			<BoardSection status="시작 전">
				{todoTaskBefore && todoTaskBefore !== undefined ? (
					todoTaskBefore.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={mode}
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
			</BoardSection>
			<BoardSection status="진행 중">
				{todoTaskDoing && todoTaskDoing !== undefined ? (
					todoTaskDoing.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={mode}
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
			</BoardSection>
			<BoardSection status="완료">
				{todoTaskDone && todoTaskDone !== undefined ? (
					todoTaskDone.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={mode}
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
			</BoardSection>
			<BoardSection status="기타">
				{todoScheduleNroutine && todoScheduleNroutine !== undefined ? (
					todoScheduleNroutine.map((item, idx) => (
						<TodoCard
							uuid={item.uuid}
							mode={mode}
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
			</BoardSection>
		</StyledModeBoard>
	);
}

export { ModeBoard };
