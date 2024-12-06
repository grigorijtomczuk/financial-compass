<template>
	<div class="container">
		<img src="@/assets/images/add-entry.png" alt="" draggable="false" />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.container {
		width: 100%;
		margin: 0 auto;
		position: absolute;
		top: 0;
		background-color: $color-background;
		z-index: 120;
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
		width: 85%;
		display: block;
		margin: 0 auto;
	}
</style>
