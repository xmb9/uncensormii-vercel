import { useEffect } from "preact/hooks";

export function wiiPlayAudio({ audioFile, volume = 0.5 }) {
	if (!audioFile) return;

	const audio = document.createElement("audio");
	audio.src = audioFile;
	audio.volume = volume;
	audio.autoplay = true;

	audio.addEventListener("ended", () => {
		audio.remove();
	});

	document.body.appendChild(audio);
}

export function WiiPlayAudio(props) {
	useEffect(() => {
		wiiPlayAudio(props);
	}, [props.audioFile, props.volume]);
	return null;
}
