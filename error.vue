<template>
	<div class="container">
		<div class="info-group">
			<h1 class="heading">Произошла ошибка</h1>
			<p class="subheading">
				{{ error }}
			</p>
		</div>
		<NuxtLink class="start-link common-link" to="/" draggable="false">Вернуться</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	import type { NuxtError } from "#app";

	const props = defineProps({
		error: Object as () => NuxtError,
	});

	const error = useError();
</script>

<style scoped lang="scss">
	.container {
		z-index: 110;
		position: relative;
		background-color: $color-background;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: 100vh;
	}

	.info-group {
		max-width: 260px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		gap: 18px;
	}

	.app-icon {
		width: 184px;
	}

	.heading {
		font-family: $font-main-rounded;
		font-size: 32px;
		font-weight: 600;
		text-align: center;
	}

	.subheading {
		font-size: 16px;
		color: $color-secondary;
		text-align: center;
	}

	.start-link {
		font-size: 32px;
	}
</style>
