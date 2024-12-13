// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: false },

	modules: ["@vite-pwa/nuxt", "nuxt-svgo", "@sidebase/nuxt-auth"],

	ssr: false,

	build: { transpile: ["jsonwebtoken"] },

	spaLoadingTemplate: true,

	typescript: {
		strict: true,
		typeCheck: true,
		// tsConfig: { compilerOptions: { noImplicitAny: false } },
	},

	css: ["assets/styles/reset.scss", "assets/styles/fonts.scss", "assets/styles/common.scss"],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern",
					additionalData: `@use "assets/styles/_variables.scss" as *;`,
				},
			},
		},
	},

	svgo: {
		componentPrefix: "icon",
	},

	auth: {
		baseURL: "/api/auth",
		globalAppMiddleware: true,
		provider: {
			type: "local",
			endpoints: {
				signUp: { path: "/sign-up", method: "post" },
				signIn: { path: "/login", method: "post" },
				signOut: { path: "/logout", method: "post" },
				getSession: { path: "/session", method: "get" },
			},
			token: {
				signInResponseTokenPointer: "/token/accessToken",
				maxAgeInSeconds: 60 * 60 * 24 * 30,
				secureCookieAttribute: process.env.NODE_ENV === "production",
				httpOnlyCookieAttribute: process.env.NODE_ENV === "production",
			},
			refresh: {
				isEnabled: false,
				token: {
					signInResponseRefreshTokenPointer: "/token/refreshToken",
					maxAgeInSeconds: 60 * 60 * 24 * 1,
					// maxAgeInSeconds: 5,
					secureCookieAttribute: process.env.NODE_ENV === "production",
					httpOnlyCookieAttribute: process.env.NODE_ENV === "production",
				},
			},
			session: {
				dataType: {
					login: "string",
				},
			},
			pages: { login: "/welcome" },
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
					content: "Финансовый Компас",
				},
			],

			link: [
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-2048-2732.jpg",
					media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1668-2388.jpg",
					media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1536-2048.jpg",
					media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1488-2266.jpg",
					media: "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1640-2360.jpg",
					media: "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1668-2224.jpg",
					media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1620-2160.jpg",
					media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1320-2868.jpg",
					media: "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1206-2622.jpg",
					media: "(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1290-2796.jpg",
					media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1179-2556.jpg",
					media: "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1284-2778.jpg",
					media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1170-2532.jpg",
					media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1125-2436.jpg",
					media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1242-2688.jpg",
					media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-828-1792.jpg",
					media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-1242-2208.jpg",
					media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-750-1334.jpg",
					media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
				{
					rel: "apple-touch-startup-image",
					href: "apple-splash/apple-splash-640-1136.jpg",
					media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
				},
			],
		},
	},

	pwa: {
		devOptions: {
			enabled: false, // Leave false; otherwise, use private browsing to keep SW and storage clean automatically
			suppressWarnings: true,
		},

		registerType: "autoUpdate",
		workbox: { globPatterns: ["**/*.{js,css,html,ico,png,svg}"] },

		manifest: {
			theme_color: "#FFFFFF",
			background_color: "#FFFFFF",
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
