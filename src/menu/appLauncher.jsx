import { render } from 'preact'
import { WiiChannel_Example } from './channels/example.jsx'
import { WiiChannel_Proxy } from './channels/proxychannel.jsx'


const channelComponents = {
    example: WiiChannel_Example,
    proxy: WiiChannel_Proxy,
    // add more channels here
}

export function AppLauncher(id) {
	console.log(`Launching channel: ${id}`);

	if (id === "SPCL.returnToMenu") {
		location.reload();
		return;
	}

	const Component = channelComponents[id.toLowerCase()];
	const appRoot = document.querySelector("wiiapp");

	if (!appRoot) {
		console.error("WE ARE SO COOKED");
		return;
	}

	const parent = appRoot.closest(".font-wiimain");
	if (parent) {
		parent.classList.remove("hidden");
	}

	if (!Component) {
		console.error(`Channel '${id}' not found.`);
		return;
	}

	appRoot.innerHTML = "";
	render(<Component />, appRoot);
}
