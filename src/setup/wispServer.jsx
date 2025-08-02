import { useEffect, useState } from "preact/hooks";

<<<<<<< HEAD
export function WispServerSelect() {
  const [message, setMessage] = useEffect("[DEV] OOBE is unfinished. Redirecting to HOME Menu...");
=======
export function WispServerSelect() {
	const [message, setMessage] = useState(
		"[DEV] OOBE is unfinished. Redirecting to HOME Menu...",
	);
>>>>>>> cc48ddba0e476636c2e1a10415387675b6c10e43

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
