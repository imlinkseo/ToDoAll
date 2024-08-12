import React from "react";
import styled from "styled-components";
import { Button } from "@components/button";
import { DateControl } from "@components/dateControl";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

function Header() {
	return (
		<StyledHeader>
			<h1 className="capitalize dmSans">to do all</h1>
			<DateControl />
			<Button color="dark" size="big">
				<span className="capitalize">about</span>
			</Button>
		</StyledHeader>
	);
}

export { Header };
