export function WiiButton({
	children,
	onClick,
	className = "",
	rounded = false,
	disabled = false,
}) {
	const defaultBg = rounded
		? "bg-[url('/assets/img/btn/WiiButtonRounded.svg')]"
		: "bg-[url('/assets/img/btn/WiiButton.svg')]";

	const hoverBg = rounded
		? "hover:bg-[url('/assets/img/btn/WiiButtonRoundedSelected.svg')]"
		: "hover:bg-[url('/assets/img/btn/WiiButtonSelected.svg')]";

	return (
		<div className="relative w-[12rem] h-20">
			<button
				onClick={disabled ? undefined : onClick}
				disabled={disabled}
				className={`w-full h-full ${defaultBg} ${hoverBg} bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center select-none text-md text-gray-800 ${disabled ? "pointer-events-none" : "cursor-pointer"} ${className}`}
			>
				<span className="text-center leading-snug">{children}</span>
			</button>

			{disabled && (
				<div
					className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 pointer-events-none mask bg-contain bg-center bg-no-repeat"
					style={{
						WebkitMaskImage: rounded
							? "url('/assets/img/btn/WiiButtonRounded.svg')"
							: "url('/assets/img/btn/WiiButton.svg')",
						maskImage: rounded
							? "url('/assets/img/btn/WiiButtonRounded.svg')"
							: "url('/assets/img/btn/WiiButton.svg')",
						WebkitMaskRepeat: "no-repeat",
						maskRepeat: "no-repeat",
						WebkitMaskSize: "contain",
						maskSize: "contain",
						WebkitMaskPosition: "center",
						maskPosition: "center",
					}}
				/>
			)}
		</div>
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
		<div className="relative w-[22rem] h-16">
			<button
				onClick={onClick}
				aria-pressed={selected}
				className={`cursor-pointer w-full h-full ${baseBg} ${selectedBg} ${hoverBg} bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center select-none text-2xl text-gray-800 ${className}`}
			>
				<span className="text-center text-sm leading-snug">{children}</span>
			</button>
		</div>
	);
}
