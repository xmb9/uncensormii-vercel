import { FaEnvelope } from "react-icons/fa";
import { WiiChannel } from "../WiiChannel";
import { WiiMenuFooterButton } from "./WiiMenuFooterButton";
import { WiiMenuFooter } from "./WiiMenuFooter";
import { WiiClock } from "./WiiMenuClock";
import { defaultChannels } from "../../global/defaultChannels";

export function WiiMenuMain({ mode }) {
	if (!localStorage.getItem("channels")) {
		localStorage.setItem("channels", JSON.stringify(defaultChannels));
	}

	const channels = JSON.parse(localStorage.getItem("channels") || "[]");
	const aspect = mode === "standard" ? "4 / 3" : "16 / 9";

	return (
		<>
			{/* 
			a fake element used by WiiChannelHandler,
			used to display the currently selected WiiChannel
			*/}
			<wiichannelfswindow></wiichannelfswindow>
			<div
				className="flex flex-col bg-gradient-to-b from-[#f6f6f6] to-[#e1e2e6]"
				style={{
					height: "100vh",
					width: `calc(100vw * ${aspect})`,
					maxWidth: "100vw",
					maxHeight: "100vh",
					overflow: "hidden",
					margin: "0 auto",
				}}
			>
				<div className="flex-1 basis-[80%] bg-[#e1e2e6] border-b-2 border-[#b3e3fa] flex flex-col items-center justify-center">
					<div
						className="grid grid-cols-4 grid-rows-3 gap-3"
						style={{
							width: "fit-content",
							height: "80%",
							margin: "0 auto",
						}}
					>
						{[...Array(12)].map((_, i) => {
							const ch = channels[i];
							return ch ? (
								<WiiChannel id={ch.id} enabled mode={mode} />
							) : (
								<WiiChannel key={`placeholder-${i}`} mode={mode} />
							);
						})}
					</div>
				</div>

				<WiiMenuFooter>
					<WiiMenuFooterButton
						icon="/Favicon.png"
						clickID="settings"
						mode={mode}
					/>
					<WiiClock />
					<WiiMenuFooterButton clickID="mail" mode={mode}>
						<FaEnvelope size={32} color="#34BEED" />
					</WiiMenuFooterButton>
				</WiiMenuFooter>
			</div>
		</>
	);
}
