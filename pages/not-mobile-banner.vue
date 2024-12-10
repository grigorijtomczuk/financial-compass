<template>
	<div class="container">
		<p class="text">
			"Финансовый Компас" доступен только на мобильных устройствах.
			<br />
			Приносим свои извинения.
		</p>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "fullscreen",
		auth: false,
	});

	if (isUserDeviceMobile()) navigateTo("/");
</script>

<style scoped lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.text {
		text-align: center;
		font-size: 28px;
		line-height: 1.2;
	}
</style>
