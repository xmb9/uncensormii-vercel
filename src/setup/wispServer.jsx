import { useEffect, useState } from "preact/hooks";

export function wispServerSelect() {
	const [message, setMessage] = useState(
		"[DEV] OOBE is unfinished. Redirecting to HOME Menu...",
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			const done = localStorage.getItem("oobeCompleted") === "true";
			const newVal = !done;
			localStorage.setItem("oobeCompleted", newVal.toString());
			window.location.reload();
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return <div>{message}</div>;
}
