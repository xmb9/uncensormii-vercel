export function WiiChannelLookup(id) {
	const raw = localStorage.getItem("channels");
	if (!raw) return null;

	try {
		const channels = JSON.parse(raw);
		if (!Array.isArray(channels)) return null;

		if (id === "SPCL.full") {
			return channels;
		}

		for (let i = 0; i < channels.length; i++) {
			if (channels[i].id === id) return channels[i];
		}
	} catch (e) {
		console.warn("[WiiChannelLookup] failed to parse channels obj: ", e);
	}

	return null;
}
