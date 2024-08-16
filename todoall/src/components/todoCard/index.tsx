import React from "react";
import styled from "styled-components";
import { ItodoCardMode, Tmode, Tstatus, Ttodo } from "src/types/types";
import {
	makeDateString,
	getContentWidthByMode,
	getBGCbyTypeNstatus,
	getDisplayByMode,
	getUntilORendByModeNstatus,
	getOpacityByModeNstatus,
} from "@hooks/hooks";
import { ReactComponent as Check } from "@images/check.svg";

const StyledTodoCard = styled.li<{
	mode: Tmode;
	type: Ttodo;
	status: Tstatus;
}>`
	border-radius: 8px;
	overflow: hidden;
	background-color: var(--mono-white);
	font-weight: 300;
	.ctn {
		display: flex;
		width: 100%;
		justify-content: space-between;
		overflow: hidden;
		padding: 8px 10px;
		box-sizing: border-box;
		background-color: ${(props) => getBGCbyTypeNstatus(props.type, props.status)};
		.content {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			font-weight: 500;
			padding: 2px 0;
			line-height: 24px;
			box-sizing: border-box;
			white-space: nowrap;
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
				background-color: var(--rgba-light-gray);
				border-radius: 4px;
			}
			.until {
				opacity: ${(props) => getOpacityByModeNstatus(props.mode, props.status)};
			}
			.end,
			.status {
				display: ${(props) => getDisplayByMode(props.mode)};
				justify-content: center;
				align-items: center;
			}
			form.status {
				gap: 4px;
				label {
					position: relative;
					text-indent: -9999rem;
					width: 20px;
					height: 20px;
					border-radius: 4px;
					background-color: var(--mono-white);
					span {
						display: block;
						width: 20px;
						height: 20px;
						border-radius: 4px;
					}
					&.before span {
						background-color: var(--rgba-light-gray);
					}
					&.doing span {
						background-color: var(--rgba-deep-gray);
					}
					&.done span {
						background-color: var(--point-1-deep);
					}
					&.checked .check {
						display: block;
					}
					.check {
						display: none;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				}
			}
			input {
				position: absolute;
				visibility: hidden;
			}
		}
	}
`;

const StyledCalendarTodoCard = styled.li<{ type: Ttodo; status: Tstatus }>`
	width: 100%;
	border-radius: 4px;
	background-color: var(--mono-white);
	overflow: hidden;
	.content {
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 100%;
		overflow: hidden;
	}
	.ctn {
		padding: 8px 6px;
		box-sizing: border-box;
		background-color: ${(props) => getBGCbyTypeNstatus(props.type, props.status)};
	}
`;

function TodoCard({
	uuid,
	mode,
	type,
	status,
	content,
	start,
	until,
	end,
}: ItodoCardMode): JSX.Element {
	function handleCheck(e: React.MouseEvent<HTMLLabelElement>) {
		if (e.currentTarget && e.currentTarget instanceof HTMLLabelElement) {
			let labels = document.querySelectorAll(`.form-${uuid} label`);
			labels.forEach((item) => {
				item.classList.remove("checked");
			});
			e.currentTarget.classList.add("checked");
		}
	}
	switch (mode) {
		case "all":
			return <></>;
		case "board":
			return (
				<StyledTodoCard mode={mode} type={type} status={status} content={content}>
					<div className="ctn">
						<p className="content">{content}</p>
						<div className="info">
							<p className="start">{makeDateString(start)}</p>
							<p className="until">
								{getUntilORendByModeNstatus(mode, status, until, end)}
							</p>
							<p className="end">
								{end && end !== undefined ? makeDateString(end) : "-"}
							</p>
						</div>
					</div>
				</StyledTodoCard>
			);
		case "calendar":
			return (
				<StyledCalendarTodoCard type={type} status={status} content={content}>
					<div className="ctn">
						<p className="content smallBody">{content}</p>
					</div>
				</StyledCalendarTodoCard>
			);
		case "list":
			return (
				<StyledTodoCard mode={mode} type={type} status={status} content={content}>
					<div className="ctn">
						<p className="content">{content}</p>
						<div className="info">
							<p className="start">{makeDateString(start)}</p>
							<p className="until">
								{getUntilORendByModeNstatus(mode, status, until, end)}
							</p>
							<p className="end">
								{end && end !== undefined ? makeDateString(end) : "-"}
							</p>
						</div>
					</div>
				</StyledTodoCard>
			);
		case "edit":
			return (
				<StyledTodoCard mode={mode} type={type} status={status} content={content}>
					<div className="ctn">
						<p className="content">{content}</p>
						<div className="info">
							<p className="start">{makeDateString(start)}</p>
							<p className="until">
								{getUntilORendByModeNstatus(mode, status, until, end)}
							</p>
							<p className="end">
								{end && end !== undefined ? makeDateString(end) : "-"}
							</p>
							{type === "업무" && (
								<form className={`status form-${uuid}`}>
									<label
										htmlFor={`before-${uuid}`}
										className={`before ${status === "시작 전" && "checked"}`}
										onClick={handleCheck}
									>
										<span>시작 전</span>
										<Check className="check" />
									</label>
									<input type="radio" name={`name-${uuid}`} id={`before-${uuid}`} />
									<label
										htmlFor={`doing-${uuid}`}
										className={`doing ${status === "진행 중" && "checked"}`}
										onClick={handleCheck}
									>
										<span>진행 중</span>
										<Check className="check" />
									</label>
									<input type="radio" name={`name-${uuid}`} id={`doing-${uuid}`} />
									<label
										htmlFor={`done-${uuid}`}
										className={`done ${status === "완료" && "checked"}`}
										onClick={handleCheck}
									>
										<span> 완료</span>
										<Check className="check" />
									</label>
									<input type="radio" name={`name-${uuid}`} id={`done-${uuid}`} />
								</form>
							)}
						</div>
					</div>
				</StyledTodoCard>
			);
		default:
			return <></>;
	}
}

export { TodoCard };
