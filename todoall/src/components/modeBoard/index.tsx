import React from "react";
import styled from "styled-components";
import { Tprogress, Ttask } from "src/types/types";

interface IboardSection {
	children: React.ReactNode;
	progress: Tprogress;
}

const StyledBoardSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;
	.boardTitle {
		padding: 0 8px;
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

function BoardSection({ children, progress }: IboardSection): JSX.Element {
	return (
		<StyledBoardSection>
			<p className="boardTitle">{progress}</p>
			<div className="boardBox">{children}</div>
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
	return (
		<StyledModeBoard>
			<BoardSection progress="시작 전">
				<p>할일</p>
			</BoardSection>
			<BoardSection progress="진행 중">
				<p>할일</p>
			</BoardSection>
			<BoardSection progress="완료">
				<p>할일</p>
			</BoardSection>
			<BoardSection progress="기타">
				<p>할일</p>
			</BoardSection>
		</StyledModeBoard>
	);
}

export { ModeBoard };
