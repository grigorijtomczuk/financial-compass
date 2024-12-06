<template>
	<AddEntryWindow v-if="windowShown" @click="toggleWindow" />
	<button @click="toggleWindow">+</button>
</template>

<script setup lang="ts">
	const windowShown = ref(false);
	function toggleWindow() {
		windowShown.value = !windowShown.value;
	}
</script>

<style scoped lang="scss">
	button {
		position: fixed;
		right: 32px;
		bottom: 116px;
		background-color: $color-accent;
		border: none;
		padding: 16px 24px;
		border-radius: 50%;
		font-size: 36px;
		color: $color-foreground;
	}
</style>
