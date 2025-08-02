export function WiiMenuFooterButton({
	icon,
	children,
	onClick,
	mode = "widescreen",
}) {
	const iconSize = mode === "standard" ? "w-7 h-7" : "w-7 h-7";
	const buttonSize = mode === "standard" ? "w-15 h-15" : "w-14 h-14";
	const dingAudio = new Audio("/assets/nintendo/audio/NoA_ding.mp3");
	dingAudio.preload = "auto";
	dingAudio.load();
	function onClickHandler() {
		onClick();
		dingAudio.pause();
		dingAudio.currentTime = 0;
		dingAudio.play();
	}
	return (
		<button
			className={`${buttonSize} rounded-full cursor-pointer bg-white border-2 border-[#34BEED] shadow-lg flex items-center justify-center hover:bg-[#eaf6fb] transition-all`}
			style={{ boxShadow: "0 0 16px 2px #34BEED88" }}
			onClick={onClickHandler}
		>
			{icon ? <img src={icon} className={iconSize} /> : children}
		</button>
	);
}
