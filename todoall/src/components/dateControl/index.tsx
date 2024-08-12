import React from "react";
import styled from "styled-components";
import { ReactComponent as Prev } from "@images/prev.svg";
import { ReactComponent as Next } from "@images/next.svg";

const StyledDateControl = styled.div`
	display: flex;
	align-items: center;
	gap: calc(var(--base-unit) * 2);
`;

function DateControl() {
	return (
		<StyledDateControl className="dateControl">
			<Prev className="pointer" />
			<p className="title">2024</p>
			<p className="title">08</p>
			<p className="title">01</p>
			<Next className="pointer" />
		</StyledDateControl>
	);
}

export { DateControl };
