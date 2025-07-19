import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), preact()],
	root: "src",
	envDir: "../",
	cacheDir: "../node_modules/.vite",
	publicDir: "../public",
	build: {
		outDir: "../dist",
		emptyOutDir: true,
	},
});
