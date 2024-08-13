import React from "react";
import styled from "styled-components";
import { Button } from "@components/button";
import { DateControl } from "@components/dateControl";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	box-sizing: border-box;
	padding: 40px 0;
	& > * {
		width: 200px;
	}
	.ctn {
		display: flex;
		justify-content: flex-end;
	}
`;

function Header() {
	return (
		<StyledHeader>
			<h1 className="capitalize dmSans nowrap">to do all</h1>
			<DateControl />
			<div className="ctn">
				<Button color="dark" size="big">
					<span className="capitalize">about</span>
				</Button>
			</div>
		</StyledHeader>
	);
}

export { Header };
