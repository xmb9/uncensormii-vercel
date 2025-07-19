export function WiiMenuFooterButton({ icon, children, onClick }) {
	return (
		<button
			className="w-20 h-20 rounded-full cursor-pointer bg-white border-2 border-[#34BEED] shadow-lg flex items-center justify-center hover:bg-[#eaf6fb] transition-all"
			style={{ boxShadow: "0 0 16px 2px #34BEED88" }}
			onClick={onClick}
		>
			{icon ? <img src={icon} className="w-8 h-8" /> : children}
		</button>
	);
}
