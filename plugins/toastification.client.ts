import Toast, { type PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
	const options: PluginOptions = {
		position: POSITION.TOP_CENTER,
		timeout: 3000,
		transition: "Vue-Toastification__fade",
		draggable: false,
	};
	nuxtApp.vueApp.use(Toast, options);
});
