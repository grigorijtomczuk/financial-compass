<template>
	<NuxtPwaManifest />
	<NuxtLoadingIndicator color="#3477f6" :throttle="0" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
		position: absolute;
	}

	.page-enter-from {
		transform: translateX(100%);
	}

	.page-leave-to {
		transform: translateX(-100%);
	}
</style>
