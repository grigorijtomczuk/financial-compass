<template>
	<h1>Обзор</h1>
	<p>{{ subheadingMessage }}</p>

	<fieldset class="multiswitch">
		<label>
			Расходы
			<input type="radio" value="expense" name="tab" v-model="type" />
		</label>
		<label>
			Доходы
			<input type="radio" value="income" name="tab" v-model="type" />
		</label>
	</fieldset>

	<div class="expenses-tab" v-if="type == 'expense'">
		<Doughnut :data="chartDataExpenses" :options="chartOptions" />
	</div>

	<div class="income-tab" v-if="type == 'income'">
		<Doughnut :data="chartDataIncome" :options="chartOptions" />
	</div>
</template>

<script setup lang="ts">
	import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
	import { Doughnut } from "vue-chartjs";

	const type = useState("type-chosen", () => "expense");

	const { data } = await useFetch("/api/transaction");
	const userTransactions = data.value?.transactions;

	Chart.register(ArcElement, Tooltip, Legend);

	const userTransactionsExpenses = ref(userTransactions?.filter((transaction) => transaction.type == "expense"));
	const labelsExpenses = userTransactionsExpenses.value?.map((transaction) => transaction.category);
	const datasetExpenses = userTransactionsExpenses.value?.map((transaction) => parseFloat(transaction.amount)) ?? [];
	const chartDataExpenses = {
		labels: labelsExpenses,
		datasets: [
			{
				backgroundColor: ["blue", "orange", "pink", "red", "green", "cyan"],
				data: datasetExpenses,
			},
		],
	};

	const userTransactionsIncome = ref(userTransactions?.filter((transaction) => transaction.type == "income"));
	const labelsIncome = userTransactionsIncome.value?.map((transaction) => transaction.category);
	const datasetIncome = userTransactionsIncome.value?.map((transaction) => parseFloat(transaction.amount)) ?? [];
	const chartDataIncome = {
		labels: labelsIncome,
		datasets: [
			{
				backgroundColor: ["blue", "orange", "pink", "red", "green", "cyan"],
				data: datasetIncome,
			},
		],
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
	};

	let expensesSum = 0;
	datasetExpenses.forEach((amount) => (expensesSum += amount));

	let incomeSum = 0;
	datasetIncome.forEach((amount) => (incomeSum += amount));

	const subheadingMessage = `Проанализируйте свой бюджет подробно ниже. Вы потратили ${expensesSum} ₽ и заработали ${incomeSum} ₽ на этой неделе.`;
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
			font-family: $font-main-rounded;

			&:has(input:checked) {
				background-color: $color-accent;
			}
		}
	}
</style>
