<template>
	<div class="layout-container">
		<AppHeader />
		<AddEntryButton />
		<div class="container">
			<slot />
		</div>
		<AppNav />
	</div>
</template>

<style scoped lang="scss">
	.container {
		width: 90%;
		margin: 0 auto;
	}
</style>
