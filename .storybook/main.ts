import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
	stories: [
		"../src/components/**/*.mdx",
		"../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-docs",
		"@storybook/addon-onboarding",
		"@storybook/addon-a11y",
		"@storybook/addon-vitest",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/nextjs-vite",
		options: {},
	},
	staticDirs: ["../public"],
	viteFinal: async (config) => {
		// plugin for remove "use client"
		config.plugins = config.plugins || [];
		config.plugins.push({
			name: "remove-use-client",
			transform(code, id) {
				if (id.includes("src/components")) {
					return code.replace(/['"]use client['"];?\s*/g, "");
				}
			},
		});

		config.build = config.build || {};
		config.build.chunkSizeWarningLimit = 2000;

		return config;
	},
};

export default config;
