import { useEffect, useState, useRef } from "preact/hooks";
import { EnterKeyIcon_svg } from "../assets/enter.jsx";
import { SysBkndSelect_ContSetup } from "./sysBkndSelect.jsx";

export function Setup() {
	const [phase, setPhase] = useState("initial");
	const [isFading, setIsFading] = useState(false);
	const dingAudio = useRef(null);

	// preload the audio so it isn't delayed
	// when the user hits ENTER/SPACE
	useEffect(() => {
		dingAudio.current = new Audio("/assets/nintendo/audio/NoA_ding.mp3");
		dingAudio.current.preload = "auto";
		dingAudio.current.load();
	}, []);

	// handle a keypress (ENTER or SPACE)
	useEffect(() => {
		const handleKey = (e) => {
			if (
				(e.key === "Enter" || e.key === " ") &&
				phase === "initial" &&
				!isFading
			) {
				if (dingAudio.current) {
					dingAudio.current.currentTime = 0;
					dingAudio.current.play().catch(() => {});
				}
				setIsFading(true);
				setTimeout(() => {
					setPhase("sysBkndSplash");
					setIsFading(false);
				}, 2000);
			}
		};

		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [phase, isFading]);

	// render either the PressEnterToContinue menu
	// or the SelectSystemBackend splash
	useEffect(() => {
		switch (phase) {
			case "initial":
				console.log("initial");
				break;
			case "sysBkndSplash":
				console.log("sysBkndSplash");
				break;
		}
		if (phase === "initial") {
			document.body.style.backgroundImage =
				"url('/assets/setup/PressEnterToContinue.png')";
			localStorage.setItem("oobeStage", "initial");
		}

		if (phase === "sysBkndSplash") {
			localStorage.setItem("oobeStage", "sysBkndSplash");
			document.body.style.backgroundImage =
				"url('/assets/nintendo/NoA_whiteBackgroundLines.png')";
			const timer = setTimeout(() => {
				setIsFading(true);
				setTimeout(() => {
					// pass setup flow to sysbkndselect
					setPhase("SysBkndSelect_ContSetup");
					setIsFading(false);
				}, 500);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [phase]);

	// text that'll be rendered,
	// name of array is the stage it'll
	// be rendered on
	const texts = {
		initial: [
			"(DEV NOTE: type 'admin' and check oobe completed, the setup isn't finished)", // ts would be "Press [ENTER] to continue."
			"Appuyez sur [ENTRÉE] pour continuer.",
			"Presione [ENTER] para continuar.",
		],
		sysBkndSplash: [
			"Select the system backend.",
			"Sélectionnez le backend du système.",
			"Seleccione el backend del sistema.",
		],
	};

	// the goods
	return (
		<setup>
			<div class="relative h-screen w-full overflow-hidden">
				<div
					class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%]
                       w-screen h-[70vh] px-8 flex items-center justify-center
                       text-gray-500 text-lg bg-repeat-x bg-top"
				>
					<div class="relative w-full h-full flex items-center pl-46 space-x-6">
						<div
							class="flex flex-col justify-center space-y-4 transition-opacity duration-[2000ms] pr-36 ease-in-out"
							style={{ opacity: phase !== "initial" || isFading ? 0 : 1 }}
						>
							{texts.initial.map((line, i) => (
								<p key={i} class="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl">
									{line}
								</p>
							))}
						</div>

						{!isFading && phase === "initial" && (
							<EnterKeyIcon_svg class="w-92 h-92" />
						)}

						<div
							class="flex flex-col justify-center space-y-4 transition-opacity duration-500 ease-in-out absolute left-0 top-0 w-full h-full"
							style={{
								opacity: phase === "sysBkndSplash" && !isFading ? 1 : 0,
							}}
						>
							{texts.sysBkndSplash.map((line, i) => (
								<p
									key={i}
									class="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl text-center"
								>
									{line}
								</p>
							))}
						</div>
					</div>
				</div>

				{phase === "SysBkndSelect_ContSetup" && !isFading && (
					<div class="absolute top-0 left-0 w-full h-full">
						<SysBkndSelect_ContSetup />
					</div>
				)}
			</div>
		</setup>
	);
}
