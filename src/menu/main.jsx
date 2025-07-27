import { useState, useEffect } from "preact/hooks";
import { WiiMainMenu } from "../renderingEngine/menu/menu";

export function Menu() {
	function getInitialMode() {
		return window.parent.__WiiCTX__?.mode || "standard";
	}

	const [mode, setMode] = useState(getInitialMode);

	useEffect(() => {
		function onResize() {
			setMode(window.parent.__WiiCTX__?.mode || "standard");
		}
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return <WiiMainMenu mode={mode} />;
}
