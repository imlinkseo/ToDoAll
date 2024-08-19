import React, { useState } from "react";
import styled from "styled-components";
import { Button, DataButton } from "@components/button";
import { ReactComponent as Plus } from "@images/plus.svg";
import { ReactComponent as Edit } from "@images/edit.svg";
import { ReactComponent as Minus } from "@images/minus.svg";
import { ReactComponent as Expand } from "@images/expand.svg";
import { TControlMode, IcontrolCard, Tmode, Ttodo } from "src/types/types";

const StyledControlCard = styled.form`
	display: flex;
	gap: 10px;
	width: 100%;
	height: 48px;
	padding: 8px;
	box-sizing: border-box;
	border-radius: 8px;
	background-color: var(--rgba-light-gray);
	label {
		display: none;
	}
	input {
		border: none;
		padding: 4px;
		box-sizing: border-box;
		border-radius: 4px;
		font-size: 15px;
	}
	input::placeholder {
		font-weight: 300;
		line-height: 24px;
	}
	input.contentControl {
		width: 100%;
	}
	input.dateControl {
		width: 80px;
	}
	.selectInput {
		width: 80px;
		background-color: var(--mono-white);
		border-radius: 4px;
		cursor: pointer;
		.selectedOption {
			display: flex;
			text-align: center;
			height: 100%;
			justify-content: space-between;
			.selectedOptionText {
				padding: 8px;
				box-sizing: border-box;
				width: 60px;
				text-align: center;
			}
			.iconCtn {
				width: 20px;
				display: flex;
				justify-content: center;
				align-items: center;

				transition: 0.4s ease;
				background-color: var(--rgba-light-gray);
				border-top-right-radius: 4px;
				border-bottom-right-radius: 4px;
				padding: 0 5px;
				box-sizing: border-box;
				&:hover {
					background-color: var(--rgba-deep-gray);
				}
			}
		}
		.selectOption {
			display: none;
		}
		&:hover {
			.selectOption {
				width: calc(80px - 20px);
				display: flex;
				flex-direction: column;
				background-color: var(--mono-white);
				border-bottom-left-radius: 4px;
				border-bottom-right-radius: 4px;
				overflow: hidden;
				li {
					transition: 0.4s ease;
					cursor: pointer;
					text-align: center;
					padding: 8px;
					border-radius: border-box;
				}
				li:nth-child(2n + 1) {
					background-color: var(--mono-white);
					&:hover {
						background-color: var(--rgba-deep-gray);
					}
				}
				li:nth-child(2n) {
					background-color: var(--rgba-light-gray);
					&:hover {
						background-color: var(--rgba-deep-gray);
					}
				}
			}
		}
	}
`;

function ControlCard({ controlMode }: IcontrolCard): JSX.Element {
	const [content, setContent] = useState<string>("");
	const [type, setType] = useState<Ttodo>("업무");
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");

	function addSlash(inputValue: string) {
		let value = inputValue.replace(/\D/g, ""); // 숫자 이외의 문자 제거
		if (value.length > 6) {
			value = value.slice(0, 6); // 6자리까지만 허용
		}
		if (value.length > 2 && value.length <= 4) {
			value = value.slice(0, 2) + "/" + value.slice(2);
		} else if (value.length > 4) {
			value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
		}
		return value;
	}

	function handleContent(e: React.ChangeEvent) {}

	function handleStartDate(e: React.ChangeEvent) {
		if (e.currentTarget instanceof HTMLInputElement) {
			let newValue = addSlash(e.currentTarget.value);
			setStartDate(newValue);
		}
	}

	function handleEndDate(e: React.ChangeEvent) {
		if (e.currentTarget instanceof HTMLInputElement) {
			let newValue = addSlash(e.currentTarget.value);
			setEndDate(newValue);
		}
	}

	function handleType(e: React.ChangeEvent) {}

	switch (controlMode) {
		case "normal":
			return <></>;
		case "add":
			return (
				<StyledControlCard>
					<label htmlFor="contentInput">할일</label>
					<input
						type="text"
						name="contentInput"
						id="contentInput"
						placeholder="할일을 입력하세요."
						maxLength={40}
						required
						className="contentControl"
						value={content}
					/>
					<label htmlFor="startDateInput">시작일</label>
					<input
						type="text"
						name="startDateInput"
						id="startDateInput"
						placeholder="YY/MM/DD"
						maxLength={8}
						required
						onChange={handleStartDate}
						className="dateControl"
						value={startDate}
					/>
					<label htmlFor="UntilDateInput">목표일</label>
					<input
						type="text"
						name="UntilDateInput"
						id="UntilDateInput"
						placeholder="YY/MM/DD"
						maxLength={8}
						required
						onChange={handleEndDate}
						className="dateControl"
						value={endDate}
					/>
					<div className="selectInput">
						<div className="selectedOption">
							<p className="selectedOptionText">유형</p>
							<div className="iconCtn">
								<Expand className="expandIcon" />
							</div>
						</div>
						<ul className="selectOption">
							<li>업무</li>
							<li>일정</li>
							<li>루틴</li>
						</ul>
					</div>
				</StyledControlCard>
			);
		case "modify":
			return <></>;
		case "delete":
			return <></>;
		default:
			return <></>;
	}
}

const StyledControlPanel = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	gap: 16px;
	.normal {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.control {
		display: flex;
		gap: 8px;
	}
`;

export default function ControlPanel(): JSX.Element {
	const [controlMode, setControlMode] = useState<TControlMode>("normal");
	function changeMode(e: React.MouseEvent) {
		if (e.currentTarget instanceof HTMLButtonElement) {
			setControlMode(e.currentTarget.dataset.mode as TControlMode);
		}
	}

	return (
		<StyledControlPanel>
			<div className="normal">
				<div className="control">
					<DataButton color="dark" size="big" event={changeMode} data="add">
						<Plus />
						<span className="capitalize">추가</span>
					</DataButton>
					<DataButton color="dark" size="big" event={changeMode} data="modify">
						<Edit />
						<span className="capitalize">수정</span>
					</DataButton>
					<DataButton color="dark" size="big" event={changeMode} data="delete">
						<Minus />
						<span className="capitalize">삭제</span>
					</DataButton>
				</div>
				<Button color="dark" size="big">
					<span className="capitalize">적용</span>
				</Button>
			</div>
			{controlMode === "add" && <ControlCard controlMode={controlMode} />}
			{controlMode === "modify" && <div className="modify">modify</div>}
			{controlMode === "delete" && <div className="delete">delete</div>}
		</StyledControlPanel>
	);
}
