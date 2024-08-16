import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tmode } from "src/types/types";
import { useControlStore } from "@stores/store";

const StyledModeButtonBG = styled.span`
	z-index: 0;
	position: absolute;
	width: 100px;
	height: 36px;
	background-color: var(--rgba-deep-gray);
	border-radius: 20px;
	top: 50%;
	left: 8px;
	transform: translateY(-50%);
	transition: left 0.8s ease-out;
`;

function ModeButtonBG() {
	return (
		<>
			<StyledModeButtonBG className="modelButtonBG"></StyledModeButtonBG>
		</>
	);
}

interface ImodeButton {
	children: React.ReactNode;
	mode: Tmode;
	event: (e: React.MouseEvent) => void;
}

const StyledModeButton = styled.button`
	z-index: 2;
	width: 100px;
	height: 36px;
	border: none;
	background-color: transparent;
	padding: 8px 16px;
	border-radius: 20px;
	&:hover {
		background-color: var(--rgba-light-gray);
	}
`;

function ModeButton({ children, mode, event }: ImodeButton) {
	return (
		<>
			<StyledModeButton
				className="pointer modeBtn"
				onClick={event}
				data-mode={mode}
			>
				{children}
			</StyledModeButton>
		</>
	);
}

const StyledModeControl = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 8px;
	box-sizing: border-box;
	background-color: var(--rgba-light-gray);
	border-radius: 40px;
`;

function ModeControl() {
	const { setMode } = useControlStore();
	const [target, setTarget] = useState<HTMLButtonElement | null>(null);

	function changeMode(e: React.MouseEvent): void {
		let mode = (e.currentTarget as HTMLButtonElement).dataset.mode;
		setMode(mode as Tmode);
		setTarget(e.currentTarget as HTMLButtonElement);
	}

	function changeLeft(target: HTMLButtonElement) {
		let bg: HTMLSpanElement | null = document.querySelector(".modelButtonBG");
		let modeBtns: NodeListOf<Element> | null =
			document.querySelectorAll(".modeBtn");
		if (bg && target && modeBtns) {
			modeBtns.forEach((modeBtn) => {
				modeBtn.classList.remove("selected");
			});
			target.classList.add("selected");
			let offsetLeft = (target as HTMLButtonElement).offsetLeft;
			bg.style.left = `${offsetLeft}px`;
		}
	}

	useEffect(() => {
		if (target) {
			changeLeft(target);
		}
	}, [target]);

	return (
		<>
			<nav className="cnt pdb24">
				<StyledModeControl>
					<ModeButton event={changeMode} mode={"all"}>
						<span className="capitalize">all</span>
					</ModeButton>
					<ModeButton event={changeMode} mode={"board"}>
						<span className="capitalize">board</span>
					</ModeButton>
					<ModeButton event={changeMode} mode={"calendar"}>
						<span className="capitalize">calendar</span>
					</ModeButton>
					<ModeButton event={changeMode} mode={"list"}>
						<span className="capitalize">list</span>
					</ModeButton>
					<ModeButtonBG />
				</StyledModeControl>
			</nav>
		</>
	);
}

window.addEventListener("resize", () => {
	let bg: HTMLSpanElement | null = document.querySelector(".modelButtonBG");
	let selectedModeBtn: HTMLButtonElement | null =
		document.querySelector(".modeBtn.selected");
	if (bg && selectedModeBtn) {
		bg.style.left = `${selectedModeBtn.offsetLeft}px`;
	}
});

export { ModeControl };
