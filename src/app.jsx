import "./index.css";
import { useEffect, useState } from "preact/hooks";
import { OOBERenderer } from "./setup/oobeRenderer.jsx";
import { Menu } from "./menu/main.jsx";
import { TestingMenu } from "./popups/testing.jsx";
import { HomeMenu } from "./popups/homemenu.jsx";

export function App() {
	const [testingVisible, setTestingVisible] = useState(false);
	const [typed, setTyped] = useState("");
	const oobeCompleted = localStorage.getItem("oobeCompleted") === "true";

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key.length === 1) {
				setTyped((prev) => (prev + e.key).slice(-10));
			} else if (e.key === "Backspace") {
				setTyped((prev) => prev.slice(0, -1));
			} else if (e.key === "Escape") {
				setTestingVisible(false);
				setTyped("");
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	useEffect(() => {
		if (typed.toLowerCase().includes("admin")) {
			setTestingVisible(true);
		}
	}, [typed]);

	return (
		<div className="w-screen h-screen text-primary">
			<div className="biggerScreenNOW w-screen h-screen font-wiimain bg-black text-white">
				your screen is too small, or you're on a phone. please use a desktop to
				use UncensorMii
			</div>

			<div className="w-screen h-screen font-wiimain bg-black text-white z-101 hidden">
			<wiiapp></wiiapp>
			</div>

			{oobeCompleted ? <Menu /> : <OOBERenderer />}

			{/* only enable our testing menu when running 'pnpm dev' */}
			{/* REMOVE WHEN SUBMITTING FOR PROCCYTHON!! */}
			{/* {import.meta.env.DEV && ( */}
			<TestingMenu
				visible={testingVisible}
				onClose={() => setTestingVisible(false)}
			/>
			{/* )} */}

			<HomeMenu />
		
		</div>
	);
}
