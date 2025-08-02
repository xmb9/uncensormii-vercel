import { WiiChannelHandler } from "./WiiChannelHandler";
import { WiiChannelLookup } from "./WiiChannelLookup";
import "./css/channel.css";
import "./css/animations.css";

export function WiiChannel({ id, enabled = false, mode = "widescreen", fsimg = false }) {
	const chn = WiiChannelLookup(id);
	const icon =
    mode === "widescreen"
        ? chn?.WSicon || chn?.icon || ""
        : chn?.SDicon || chn?.icon || "";

	const name = chn?.name || "";
	const spin = chn?.rotating === true;

	const aspectClass =
		mode === "standard"
			? "aspect-[4/3] channel-scale-standard"
			: "aspect-[16/9] channel-scale-widescreen";

	return (
		<div className="relative flex flex-col items-center group">
			<div
				className={`relative bg-white border-[#aaa] border-4 rounded-2xl transition-colors ${aspectClass} ${
					enabled
						? "group-hover:border-blue-400 cursor-pointer"
						: "border-[#aaa]"
				}`}
				onClick={enabled ? () => WiiChannelHandler(id) : undefined}
			>
				{icon && (
					<img
						src={icon}
						alt={id}
						className={`absolute inset-0 w-full h-full rounded-xl object-contain pointer-events-none ${
							spin ? "spin3d" : ""
						} ${fsimg ? "" : "p-1"}`}
					/>
				)}
			</div>

			{name && (
				<div
					className="absolute mt-5 top-full border-[#ccc] border-2 text-center bg-[#f0f0f0] rounded-full text-md text-[#444] shadow-sm z-10 chnHoverName
                   whitespace-nowrap px-4"
				>
					{name}
				</div>
			)}
		</div>
	);
}
