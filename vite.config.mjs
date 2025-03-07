import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NodeCGPlugin from "vite-plugin-nodecg";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		NodeCGPlugin({
			inputs: {
				"graphics/index.tsx": "./src/graphics/template.html",
				"dashboard/*.tsx": "./src/dashboard/template.html",
			},
		}),
	],
	server: {
		port: 3000,
	},
});
