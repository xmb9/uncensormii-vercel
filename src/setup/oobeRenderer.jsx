import { Setup } from "./main.jsx";
import { SysBkndSelect_ContSetup } from "./sysBkndSelect.jsx";

export function OOBERenderer() {
	const oobeStage = localStorage.getItem("oobeStage");

	// when we get more oobe pages, consider
	// switching this to a switch/case statement
	if (oobeStage === "sysBknd") {
		return <SysBkndSelect_ContSetup />;
	}

	// render thoust oobe main page (PressEnterToContinue)
	return <Setup />;
}
