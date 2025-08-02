import { useEffect, useState } from "preact/hooks";
import '../../font.css';

export function WiiClock() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setNow(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const weekday = now.toLocaleDateString(undefined, { weekday: "short" });
	const month = now.getMonth() + 1;
	const day = now.getDate();
	let hours = now.getHours();
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const ampm = hours >= 12 ? "P" : "A";

	hours = hours % 12;
	if (hours === 0) hours = 12;

	return (
		<div className="flex flex-col items-center justify-center leading-none">
			<span
				className="text-center text-1xl font-light text-[#7a7a7a] select-none tracking-wide drop-shadow"
				style={{ letterSpacing: "0.05em" }}
			>
				{`${weekday} ${month}/${day}`}
			</span>
			<span
				className="text-center text-2xl font-light text-[#7a7a7a] select-none tracking-wide drop-shadow"
				style={{ letterSpacing: "0.05em", fontFamily: "'Wii Clock', sans-serif" }}
			>
				{`${hours}:${minutes}`}
			</span>
		</div>
	);
}
