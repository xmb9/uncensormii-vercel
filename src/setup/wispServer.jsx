import { useEffect, useState } from "preact/hooks";

export function WispServerSelect() {
	const [message, setMessage] = useState(
		"[DEV] OOBE is unfinished. Redirecting to HOME Menu...",
	);

	useEffect(() => {
		console.log("we're balling now");
		const timer = setTimeout(() => {
			localStorage.setItem("oobeCompleted", "true");
			localStorage.setItem("oobeStage", "wispServer");
			window.location.reload();
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return <div>{message}</div>;
}
