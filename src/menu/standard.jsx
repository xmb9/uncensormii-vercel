import { FaEnvelope } from "react-icons/fa";
import { WiiChannel } from "../renderingEngine/channel";
import { WiiMenuFooterButton } from "../renderingEngine/menu/footerButton";
import { WiiMenuFooter } from "../renderingEngine/menu/footer";

export function StandardMenu() {
	if (!localStorage.getItem("channels")) {
		localStorage.setItem(
			"channels",
			JSON.stringify([
				{
					id: "disc",
					name: "Disc Channel",
					icon: "/assets/img/chn/disc/icon.svg",
				},
			]),
		);
	}

	const channels = JSON.parse(localStorage.getItem("channels") || "[]");

	const handleClick = () => {
		localStorage.oobeCompleted = "false";
		window.location.reload();
	};

	return (
		<div
			className="flex flex-col bg-gradient-to-b from-[#f6f6f6] to-[#e1e2e6]"
			style={{
				height: "100vh",
				width: "calc(100vh * 4 / 3)",
				maxWidth: "100vw",
				margin: "0 auto",
			}}
		>
			<div className="pl-20 flex-1 basis-[80%] bg-[#e1e2e6] border-b-2 border-[#b3e3fa] flex flex-col items-center justify-center">
				<div
					className="grid grid-cols-4 grid-rows-3 gap-6"
					style={{
						width: "100%",
						height: "80%",
					}}
				>
					{[...Array(12)].map((_, i) => {
						const ch = channels[i];
						if (ch) {
							return (
								<WiiChannel
									key={ch.id}
									icon={ch.icon}
									name={ch.name}
									hoverFX
									mode="standard"
								/>
							);
						} else {
							return (
								<WiiChannel
									key={`placeholder-${i}`}
									icon=""
									name=""
									mode="standard"
								/>
							);
						}
					})}
				</div>
			</div>

			{/* Footer */}
			<WiiMenuFooter>
				<WiiMenuFooterButton icon="/Favicon.png" clickID="settings" />

				<div className="flex flex-col items-center justify-center leading-none">
					<span
						className="text-center text-3xl font-light text-[#7a7a7a] select-none tracking-wide drop-shadow"
						style={{ letterSpacing: "0.05em" }}
					>
						Mon 7/14
					</span>
					<span
						className="text-center text-5xl font-light text-[#7a7a7a] select-none tracking-wide drop-shadow"
						style={{ letterSpacing: "0.05em" }}
					>
						00:00
					</span>
				</div>

				<WiiMenuFooterButton clickID="mail">
					<FaEnvelope size={32} color="#34BEED" />
				</WiiMenuFooterButton>
			</WiiMenuFooter>
		</div>
	);
}
