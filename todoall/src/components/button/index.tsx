import React from "react";
import { TControlMode } from "src/types/types";
import styled from "styled-components";

type TbtnColor = "dark" | "light";

type TbtnSize = "big" | "small";

interface Ibutton {
	children: React.ReactNode;
	color: TbtnColor;
	size: TbtnSize;
	event?: (e: any) => void;
}

interface IdataButton extends Ibutton {
	data: TControlMode;
}

function getBGCbyColor(color: TbtnColor): string {
	switch (color) {
		case "dark":
			return "var(--mono-black)";
		case "light":
			return "var(--bg-gray)";
		default:
			return "var(--mono-black)";
	}
}

function getCbyColor(color: TbtnColor): string {
	switch (color) {
		case "dark":
			return "var(--mono-white)";
		case "light":
			return "var(--mono-black)";
		default:
			return "var(--mono-white)";
	}
}

function getPDbySize(size: TbtnSize): string {
	switch (size) {
		case "big":
			return "var(--base-unit) calc(var(--base-unit) * 2)";
		case "small":
			return "var(--base-unit)";
		default:
			return "var(--base-unit) calc(var(--base-unit) * 2)";
	}
}

const StyledButton = styled.button<{ color: TbtnColor; size: TbtnSize }>`
	display: flex;
	gap: 8px;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: ${(props) => getBGCbyColor(props.color)};
	color: ${(props) => getCbyColor(props.color)};
	padding: ${(props) => getPDbySize(props.size)};
	border-radius: 20px;
`;

function Button({ color, size, children, event }: Ibutton): JSX.Element {
	return (
		<StyledButton color={color} size={size} onClick={event} className="pointer">
			{children}
		</StyledButton>
	);
}

function DataButton({
	color,
	size,
	children,
	event,
	data,
}: IdataButton): JSX.Element {
	return (
		<StyledButton
			color={color}
			size={size}
			onClick={event}
			data-mode={data}
			className="pointer"
		>
			{children}
		</StyledButton>
	);
}

export { Button, DataButton };
