import React from "react";
import styled from "styled-components";

const StyledModeButtonBG = styled.span``;

function ModeButtonBG() {
	return (
		<>
			<StyledModeButtonBG></StyledModeButtonBG>
		</>
	);
}

interface ImodeButton {
	children: React.ReactNode;
}

const StyledModeButton = styled.button`
	border: none;
	background-color: transparent;
	padding: 8px 16px;
	border-radius: 20px;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: var(--rgba-light-gray);
	}
`;

function ModeButton({ children }: ImodeButton) {
	return (
		<>
			<StyledModeButton className="pointer">{children}</StyledModeButton>
		</>
	);
}

const StyledModeControl = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 4px 8px;
`;

function ModeControl() {
	return (
		<>
			<StyledModeControl>
				<ModeButton>
					<span className="capitalize">all</span>
				</ModeButton>
				<ModeButton>
					<span className="capitalize">board</span>
				</ModeButton>
				<ModeButton>
					<span className="capitalize">calendar</span>
				</ModeButton>
				<ModeButton>
					<span className="capitalize">list</span>
				</ModeButton>
				<ModeButtonBG />
			</StyledModeControl>
		</>
	);
}

export { ModeControl };
