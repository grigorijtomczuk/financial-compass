<template>
	<div class="navbar-container">
		<nav class="navbar">
			<NuxtLink class="menu-link" to="/">
				<IconHome class="menu-link__icon" />
			</NuxtLink>
			<NuxtLink class="menu-link" to="/goals">
				<IconChartBar class="menu-link__icon" />
			</NuxtLink>
			<NuxtLink class="menu-link" to="/statistics">
				<IconChartPie class="menu-link__icon" />
			</NuxtLink>
		</nav>
	</div>
</template>

<style scoped lang="scss">
	.navbar-container {
		z-index: 100;
		position: fixed;
		bottom: 0;
		width: 100%;
		box-shadow: $shadow-intense;
		background-color: $color-foreground;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 300px;
		margin: 16px auto;
		margin-bottom: 32px;
	}

	.menu-link {
		color: $color-primary;
		&__icon {
			font-size: 32px;
		}
	}

	.router-link-active {
		color: $color-accent;
	}
</style>
