<template>
	<h1>Обзор</h1>
	<p>Проанализируйте свой бюджет подробно ниже. Вы потратили 1500 ₽ и заработали 3150 ₽ на этой неделе.</p>

	<fieldset class="multiswitch">
		<label>
			Расходы
			<input type="radio" value="expenses" name="tab" v-model="openedTab" />
		</label>
		<label>
			Доходы
			<input type="radio" value="income" name="tab" v-model="openedTab" />
		</label>
	</fieldset>

	<div class="expenses-tab" v-if="openedTab == 'expenses'"></div>

	<div class="income-tab" v-if="openedTab == 'income'"></div>
</template>

<script setup lang="ts">
	const openedTab = useState("opened-tab", () => "expenses");
</script>

<style scoped lang="scss">
	h1 {
		font-weight: 700;
		font-size: 24px;
		margin-bottom: 12px;
	}

	p {
		font-size: 14px;
		color: $color-secondary;
		margin-bottom: 16px;
	}

	.multiswitch {
		display: flex;
		background: $color-primary;
		border-radius: 24px;
		padding: 6px;
		color: $color-background;
		margin-bottom: 24px;

		input {
			display: none;
		}

		label {
			width: 50%;
			text-align: center;
			padding: 0 1em;
			z-index: 2;
			border-radius: 24px;
			font-weight: 700;
			height: 36px;
			line-height: 36px;
			transition: $transition-normal;

			&:has(input:checked) {
				background-color: $color-accent;
			}
		}
	}
</style>
