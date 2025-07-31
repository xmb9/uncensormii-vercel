import { useState } from "preact/hooks";
import { WiiMultiSelectContext } from "./WiiMultiSelectContext";

export function WiiMultiSelectProvider({ options, children, mode = "single" }) {
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [selectedIndices, setSelectedIndices] = useState([]);

	return (
		<WiiMultiSelectContext.Provider
			value={{
				mode,
				options,
				selectedIndex,
				setSelectedIndex,
				selectedIndices,
				setSelectedIndices,
			}}
		>
			{children}
		</WiiMultiSelectContext.Provider>
	);
}
