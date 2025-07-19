export function WiiButton({
	children,
	onClick,
	className = "",
	rounded = false,
}) {
	const defaultBg = rounded
		? "bg-[url('/assets/img/btn/WiiButtonRounded.svg')]"
		: "bg-[url('/assets/img/btn/WiiButton.svg')]";
	const hoverBg = rounded
		? "group-hover:bg-[url('/assets/img/btn/WiiButtonRoundedSelected.svg')]"
		: "group-hover:bg-[url('/assets/img/btn/WiiButtonSelected.svg')]";

	return (
		<button
			onClick={onClick}
			className={`group cursor-pointer w-[32rem] h-20 ${defaultBg} ${hoverBg} bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center select-none text-2xl text-gray-800 ${className}`}
		>
			<span className="text-center leading-snug">{children}</span>
		</button>
	);
}

export function WiiButtonMultiSelection({
	children,
	onClick,
	className = "",
	selected = false,
	rounded = false,
}) {
	const baseBg = rounded
		? "bg-[url('/assets/img/btn/WiiButtonRounded.svg')]"
		: "bg-[url('/assets/img/btn/WiiButton.svg')]";
	const selectedBg = rounded
		? "aria-pressed:bg-[url('/assets/img/btn/WiiButtonRoundedSelected.svg')]"
		: "aria-pressed:bg-[url('/assets/img/btn/WiiButtonSelected.svg')]";
	const hoverBg = rounded
		? "hover:bg-[url('/assets/img/btn/WiiButtonRoundedSelected.svg')]"
		: "hover:bg-[url('/assets/img/btn/WiiButtonSelected.svg')]";

	return (
		<div className="relative w-[32rem] h-24">
			<button
				onClick={onClick}
				aria-pressed={selected}
				className={`cursor-pointer w-full h-full ${baseBg} ${selectedBg} ${hoverBg} bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center select-none text-2xl text-gray-800 ${className}`}
			>
				<span className="text-center leading-snug">{children}</span>
			</button>
		</div>
	);
}
