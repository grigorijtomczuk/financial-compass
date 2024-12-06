<template>
	<AppHeader />
	<AddEntryButton />
	<div class="container">
		<img src="@/assets/images/statistics.png" alt="" draggable="false" />
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		middleware: "auth",
	});
</script>

<style scoped lang="scss">
	.container {
		width: 90%;
		margin: 0 auto;
	}

	h1 {
		font-weight: 700;
		font-size: 24px;
		margin-bottom: 12px;
	}

	p {
		font-size: 14px;
		color: $color-secondary;
		margin-bottom: 32px;
	}

	img {
		width: 100%;
	}
</style>
