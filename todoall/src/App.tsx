import React, { ReactElement } from "react";
import { Header } from "@components/header/index";
import { ModeControl } from "@components/modeControl";
import { useControlStore } from "@stores/store";
import { Tmode } from "./types/types";
import { ModeAll } from "@components/modeAll";
import { ModeBoard } from "@components/modeBoard";
import Footer from "@components/footer";
import ModeCalendarNlist from "@components/modeCalendarNlist";
import ControlPanel from "@components/controlPanel";

function App() {
	const { mode } = useControlStore();
	function renderModeComponent(mode: Tmode): ReactElement {
		switch (mode) {
			case "all":
				return <ModeAll />;
			case "board":
				return <ModeBoard />;
			case "calendar":
				return <ModeCalendarNlist />;
			case "list":
				return <ModeCalendarNlist />;
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
				{/* <ControlPanel /> */}
				<Footer />
			</div>
		</>
	);
}

export default App;
