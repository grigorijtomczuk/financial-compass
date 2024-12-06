<template>
	<NuxtLink to="/welcome">go</NuxtLink>
</template>

<script setup lang="ts">
	definePageMeta({
		middleware: "auth",
	});
</script>

<style scoped lang="scss"></style>
