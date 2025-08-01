import { createRoot } from 'preact/compat/client';
import { WiiChannelLookup } from "./WiiChannelLookup";
import { WiiChannelFull } from "./WiiChannelFull";

let root = null;
let container = null;

function getInitialMode() {
	return window.parent.__WiiCTX__?.mode || "standard";
}

export function WiiChannelHandler(id) {
	container = container || document.querySelector("wiichannelfswindow");
	if (!container) return;

	if (id === "SPCL.returnToMenu") {
		window.parent.__WiiCTX__.channel = "none";
		if (!root) return;

		Object.assign(container.style, {
			position: "fixed",
			top: "0",
			left: "0",
			width: "100vw",
			height: "100vh",
			zIndex: "9999",
			willChange: "transform",
			transformOrigin: "top left",
			transition: "transform 0.4s ease-in-out",
			transform: "scale(1)",
		});

		container.getBoundingClientRect();
		container.style.transform = "scale(0.01)";

		const onTransitionEnd = (e) => {
			if (e.target === container && e.propertyName === "transform") {
				container.removeEventListener("transitionend", onTransitionEnd);
				root.unmount();
				root = null;

				Object.assign(container.style, {
					position: "",
					top: "",
					left: "",
					width: "",
					height: "",
					zIndex: "",
					willChange: "",
					transformOrigin: "",
					transition: "",
					transform: "",
				});
			}
		};

		container.addEventListener("transitionend", onTransitionEnd);
		return;
	}

	const chn = WiiChannelLookup(id);
	if (!chn) return;

	window.parent.__WiiCTX__.channel = id;
	const mode = getInitialMode();

	if (!root) root = createRoot(container);
	root.render(<WiiChannelFull chn={chn} mode={mode} />);
}