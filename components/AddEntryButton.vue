<template>
	<AddEntryWindow v-if="windowShown" @click="toggleWindow" />
	<button class="button" @click="toggleWindow">+</button>
</template>

<script setup lang="ts">
	const windowShown = ref(false);
	function toggleWindow() {
		windowShown.value = !windowShown.value;
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
	}
</style>
