<template>
	<button class="button" @touchend="openAddEntryPage">+</button>
</template>

<script setup lang="ts">
	function openAddEntryPage() {
		navigateTo("/add-entry");
	}
</script>

<style scoped lang="scss">
	.button {
		position: fixed;
		right: 32px;
		bottom: 116px;
		background-color: $color-accent;
		border: none;
		display: block;
		padding: 0;
		text-align: center;
		border-radius: 50%;
		aspect-ratio: 1;
		width: 70px;
		height: auto;
		font-size: 36px;
		color: $color-background;
		box-shadow: $shadow-normal;
		transition: $transition-normal;

		&:active {
			transform: scale(0.8);
		}
	}
</style>
