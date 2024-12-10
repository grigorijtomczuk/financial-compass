export default defineNuxtRouteMiddleware((to, from) => {
	if (!isUserDeviceMobile() && to.path !== "/not-mobile-banner") {
		return navigateTo("/not-mobile-banner");
	}
});
