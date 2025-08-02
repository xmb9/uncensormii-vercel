import { useEffect } from "preact/hooks";
import { render } from "preact";
import { WiiMultiSelectProvider } from "../menuAPI/multiSelect/WiiMultiSelectProvider";
import { WiiMultiSelectList } from "../menuAPI/multiSelect/WiiMultiSelectList";
import { WiiMultiSelectConfirm } from "../menuAPI/multiSelect/WiiMultiSelectConfirm";

export function SysBkndSelect_ContSetup() {
	useEffect(() => {
		document.body.style.backgroundImage =
			"url('/assets/setup/SystemBackendSelect.png')";

		const stage = localStorage.getItem("oobeStage");

		// if we're anything other than sysBknd, get rid
		// of the old setup page and replace it with the
		// new one
		if (!stage || stage !== "sysBknd") {
			const el = document.getElementsByTagName("setup")[0];
			if (el) {
				const replacement = document.createElement("setup");
				el.replaceWith(replacement);
				render(<SysBkndSelect_ContSetup />, replacement);
			}

			// set the stage so we aren't infinitely looping
			localStorage.setItem("oobeStage", "sysBknd");

			// i've seen weird visual glitches where if we don't reload,
			// the background doesn't load & you can't interact with the
			// page
			window.location.reload();
		}
	}, []);
	

	// TODO: impl sysbknd select
	const handleConfirm = (selected) => {
		console.log(selected);
		var stage = localStorage.getItem("oobeStage");
		stage = "wispServer"
		localStorage.setItem("oobeStage", "wispServer");
		window.location.reload();
	};

	return (
		<WiiMultiSelectProvider
			mode="single"
			options={[
				"Ultraviolet",
				<>
					Scramjet
					<br />
					<sub class="text-xs text-gray-700">
						Scramjet is still in beta, use at your own risk.
					</sub>
				</>,
			]}
		>
			<div class="h-screen w-screen relative px-4">
				<div class="flex flex-col items-center justify-center h-full space-y-20">
					<WiiMultiSelectList />
				</div>
				<div class="absolute bottom-[-3.5%] right-4">
					<WiiMultiSelectConfirm onConfirm={handleConfirm}>
						Confirm
					</WiiMultiSelectConfirm>
				</div>
			</div>
		</WiiMultiSelectProvider>
	);
}
