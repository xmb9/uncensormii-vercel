import { createContext } from "preact";
import { useContext } from "preact/hooks";

export const WiiMultiSelectContext = createContext();

export function useMultiSelect() {
	return useContext(WiiMultiSelectContext);
}
