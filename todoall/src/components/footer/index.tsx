import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 0;
	box-sizing: border-box;
	.contact {
		display: flex;
		gap: 8px;
		align-items: center;
	}
`;

export default function Footer() {
	return (
		<StyledFooter>
			<p className="contact">
				<span className="capitalize caption dmSans">develop by</span>
				<span className="caption dmSans link">imlinkseo@gamil.com</span>
			</p>
			<p className="capitalize caption dmSans">to do all</p>
		</StyledFooter>
	);
}
