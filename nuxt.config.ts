// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: false },

	modules: ["@vite-pwa/nuxt"],

	app: {
		head: {
			viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui",
			htmlAttrs: { lang: "ru" },
			title: "Финансовый Компас",

			meta: [
				{
					name: "apple-mobile-web-app-capable",
					content: "yes",
				},
				{
					name: "mobile-web-app-capable",
					content: "yes",
				},
				{
					name: "apple-mobile-web-app-status-bar-style",
					content: "default",
				},
				{
					name: "apple-mobile-web-app-title",
					content: "Title",
				},
			],
		},
	},

	pwa: {
		devOptions: { enabled: true },
		manifest: {
			theme_color: "#8936FF",
			background_color: "#2EC6FE",
			orientation: "portrait",
			display: "standalone",
			lang: "ru",
			name: "Финансовый Компас",
			short_name: "Финансовый Компас",
			start_url: "/",
			scope: "/",
		},
	},
});
