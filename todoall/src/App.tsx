import React, { ReactElement, useEffect, useState } from "react";
import { Header } from "@components/header/index";
import { ModeControl } from "@components/modeControl";
import { useControlStore } from "@stores/store";
import { Tmode } from "./types/types";
import { ModeAll } from "@components/modeAll";
import { ModeBoard } from "@components/modeBoard";
import { ModeCalendar } from "@components/modeCalendar";
import { ModeList } from "@components/modeList";
import Footer from "@components/footer";

function App() {
	const { mode } = useControlStore();
	function renderModeComponent(mode: Tmode): ReactElement {
		switch (mode) {
			case "all":
				return <ModeAll />;
			case "board":
				return <ModeBoard />;
			case "calendar":
				return <ModeCalendar />;
			case "list":
				return <ModeList />;
			default:
				return <ModeAll />;
		}
	}

	return (
		<>
			<div className="App">
				<Header />
				<ModeControl />
				<main>{renderModeComponent(mode)}</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
