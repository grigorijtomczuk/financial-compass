<template>
	<div class="container">
		<div class="info-group">
			<IconAppIcon class="app-icon" filled :fontControlled="false" />
			<h1 class="heading">Финансовый Компас</h1>
			<p class="subheading">
				Простой и удобный трекер личных финансов, который поможет эффективно управлять доходами и расходами
			</p>
		</div>
		<NuxtLink class="start-link common-link" :to="`/auth/login${passedQuery}`" draggable="false">Начать</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "fullscreen",
		auth: false,
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
	});

	const { query } = useRoute();
	const queryPairs = Object.keys(query).map((key) => `${key}=${query[key]}`);
	const passedQuery = "?" + queryPairs.join("&");
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
		line-height: 1.2;
	}

	.start-link {
		font-size: 32px;
	}
</style>
