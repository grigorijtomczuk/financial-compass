// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: false },

	modules: ["@vite-pwa/nuxt"],

	typescript: {
		strict: true,
		typeCheck: true,
	},

	css: ["assets/styles/_reset.scss"],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern",
					additionalData: `@use "assets/styles/_variables.scss";
									 @use "assets/styles/_default.scss";`,
				},
			},
		},
	},

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
		devOptions: { enabled: false },
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
			icons: [
				{ src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
				{ src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
				{
					src: "android/android-launchericon-512-512.png",
					sizes: "512x512",
				},
				{
					src: "android/android-launchericon-192-192.png",
					sizes: "192x192",
				},
				{
					src: "android/android-launchericon-144-144.png",
					sizes: "144x144",
				},
				{
					src: "android/android-launchericon-96-96.png",
					sizes: "96x96",
				},
				{
					src: "android/android-launchericon-72-72.png",
					sizes: "72x72",
				},
				{
					src: "android/android-launchericon-48-48.png",
					sizes: "48x48",
				},
				{
					src: "ios/16.png",
					sizes: "16x16",
				},
				{
					src: "ios/20.png",
					sizes: "20x20",
				},
				{
					src: "ios/29.png",
					sizes: "29x29",
				},
				{
					src: "ios/32.png",
					sizes: "32x32",
				},
				{
					src: "ios/40.png",
					sizes: "40x40",
				},
				{
					src: "ios/50.png",
					sizes: "50x50",
				},
				{
					src: "ios/57.png",
					sizes: "57x57",
				},
				{
					src: "ios/58.png",
					sizes: "58x58",
				},
				{
					src: "ios/60.png",
					sizes: "60x60",
				},
				{
					src: "ios/64.png",
					sizes: "64x64",
				},
				{
					src: "ios/72.png",
					sizes: "72x72",
				},
				{
					src: "ios/76.png",
					sizes: "76x76",
				},
				{
					src: "ios/80.png",
					sizes: "80x80",
				},
				{
					src: "ios/87.png",
					sizes: "87x87",
				},
				{
					src: "ios/100.png",
					sizes: "100x100",
				},
				{
					src: "ios/114.png",
					sizes: "114x114",
				},
				{
					src: "ios/120.png",
					sizes: "120x120",
				},
				{
					src: "ios/128.png",
					sizes: "128x128",
				},
				{
					src: "ios/144.png",
					sizes: "144x144",
				},
				{
					src: "ios/152.png",
					sizes: "152x152",
				},
				{
					src: "ios/167.png",
					sizes: "167x167",
				},
				{
					src: "ios/180.png",
					sizes: "180x180",
				},
				{
					src: "ios/192.png",
					sizes: "192x192",
				},
				{
					src: "ios/256.png",
					sizes: "256x256",
				},
				{
					src: "ios/512.png",
					sizes: "512x512",
				},
				{
					src: "ios/1024.png",
					sizes: "1024x1024",
				},
			],
		},
	},
});
