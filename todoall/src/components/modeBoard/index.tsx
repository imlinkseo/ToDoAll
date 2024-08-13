import React from "react";
import styled from "styled-components";

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
	}
`;

function BoardSection() {
	return (
		<StyledBoardSection>
			<p className="boardTitle">시작 전</p>
			<div className="boardBox"></div>
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
			<BoardSection></BoardSection>
			<BoardSection></BoardSection>
			<BoardSection></BoardSection>
			<BoardSection></BoardSection>
		</StyledModeBoard>
	);
}

export { ModeBoard };
