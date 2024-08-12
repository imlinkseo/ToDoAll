import React from "react";
import styled from "styled-components";
import { ReactComponent as Prev } from "@images/prev.svg";
import { ReactComponent as Next } from "@images/next.svg";
import { Button } from "@components/button";

interface Iheader {}

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	.dateControl {
		display: flex;
		align-items: center;
		gap: calc(var(--base-unit) * 2);
	}
`;

function Header(props: any) {
	return (
		<StyledHeader>
			<h1 className="capitalize dmSans">to do all</h1>
			<div className="dateControl">
				<Prev className="pointer" />
				<p className="title">2024</p>
				<p className="title">08</p>
				<p className="title">01</p>
				<Next className="pointer" />
			</div>
			<Button color="dark" size="big">
				<span className="capitalize">about</span>
			</Button>
		</StyledHeader>
	);
}

export { Header };
