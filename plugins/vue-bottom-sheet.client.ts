import "@webzlodimir/vue-bottom-sheet/dist/style.css";

// @ts-ignore
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueBottomSheet);
});
