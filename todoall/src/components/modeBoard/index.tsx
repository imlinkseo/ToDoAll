import React from "react";
import styled from "styled-components";
import { Tmode, Tstatus } from "src/types/types";
import { TodoCard } from "@components/todoCard";
import { useControlStore, useIntimeArrStore } from "@stores/store";

interface IboardSection {
	children: React.ReactNode;
	status: Tstatus;
}

const StyledBoardSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;
	transition: 0.5s ease;
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

const StyledModeBoard = styled.div<{ mode: Tmode }>`
	display: flex;
	min-height: ${(props) =>
		props.mode === "all" ? "210px" : "calc(100vh - 432px)"};
	width: 100%;
	gap: 16px;
`;

function ModeBoard() {
	const { mode } = useControlStore();
	const { intimeArr } = useIntimeArrStore();

	return (
		<StyledModeBoard mode={mode}>
			<BoardSection status="시작 전">
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
			</BoardSection>
			<BoardSection status="진행 중">
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
			</BoardSection>
			<BoardSection status="완료">
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
			</BoardSection>
			<BoardSection status="기타">
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
			</BoardSection>
		</StyledModeBoard>
	);
}

export { ModeBoard };
