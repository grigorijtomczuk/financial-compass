<template>
	<AppHeader />
	<AddEntryButton />
	<div class="container">
		<h1>Цели и задачи</h1>
		<img src="@/assets/images/goals.png" alt="" draggable="false" />
	</div>
</template>

<script setup lang="ts"></script>

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
