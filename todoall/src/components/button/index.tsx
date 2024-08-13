import React from "react";
import styled from "styled-components";

interface Ibutton {
	children: React.ReactNode;
	color: string;
	size: string;
	event?: () => void;
}

const StyledButton = styled.button<{ color: string; size: string }>`
	display: flex;
	gap: 16px;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: ${(props) =>
		props.color
			? props.color === "dark"
				? "var(--mono-black)"
				: "var(--bg-gray)"
			: "var(--mono-black)"};
	color: ${(props) =>
		props.color
			? props.color === "dark"
				? "var(--mono-white)"
				: "var(--mono-black)"
			: "var(--mono-white)"};
	padding: ${(props) =>
		props.size
			? props.size === "big"
				? "var(--base-unit) calc(var(--base-unit) * 2)"
				: "var(--base-unit)"
			: "var(--base-unit) calc(var(--base-unit) * 2)"};
	border-radius: 20px;
`;

function Button({ color, size, children, event }: Ibutton): JSX.Element {
	return (
		<StyledButton color={color} size={size} onClick={event} className="pointer">
			{children}
		</StyledButton>
	);
}

export { Button };
