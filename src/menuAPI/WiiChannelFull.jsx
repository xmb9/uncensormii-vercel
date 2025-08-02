import { AppLauncher } from "../menu/appLauncher";
import { WiiMenuFooter } from "./menu/WiiMenuFooter";
import { WiiButton } from "./WiiButton";
import { WiiChannelHandler } from "./WiiChannelHandler";

export function WiiChannelFull({ chn, mode }) {
	const aspect = mode === "standard" ? "4 / 3" : "16 / 9";
	const isDiscChannel = chn?.id === "disc";

	const settings = JSON.parse(localStorage.getItem("settings") || "{}");
	const volume = parseFloat(settings.volume) || 0.5;

	const banner = mode === "widescreen" ? chn?.WSbanner : chn?.SDbanner;

	return (
		<div className="w-screen h-screen flex flex-col z-96">
			<audio src={chn?.musicFile || ""} autoPlay loop volume={volume} />

			<div
				className="flex-grow bg-gradient-to-b from-[#f6f6f6] to-[#e1e2e6] overflow-hidden"
				style={{
					width: `calc(100vw * ${aspect})`,
					maxWidth: "100vw",
					aspectRatio: aspect,
				}}
			>
				{banner && <img src={banner} className="w-full p-0 m-0 h-full object-contain" />}
			</div>

			<WiiMenuFooter className="flex-shrink-0 basis-1/5 px-12 bg-gradient-to-t from-[#e1e2e6] to-[#f6f6f6] border-t-6 border-[#34beed] relative flex gap-x-4" style={{ boxShadow: "0 -2px 16px 0 #b3e3fa33" }}>
				<WiiButton rounded onClick={() => WiiChannelHandler("SPCL.returnToMenu")}>
					Return to Menu
				</WiiButton>
				<WiiButton rounded disabled={isDiscChannel} onClick={() => AppLauncher(chn.id)}>
					Start
				</WiiButton>
			</WiiMenuFooter>
		</div>
	);
}