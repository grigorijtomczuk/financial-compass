<template>
	<AppHeader />
	<AddEntryButton />
	<div class="container">
		<h1>Обзор</h1>
		<p>Проанализируйте свой бюджет подробно ниже. Вы потратили 1500 ₽ и заработали 3150 ₽ на этой неделе.</p>
		<img src="@/assets/images/category.png" alt="" draggable="false" />
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
