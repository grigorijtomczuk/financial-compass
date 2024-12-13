<template>
	<div class="container">
		<h1 class="heading">Транзакция</h1>
		<div class="group">
			<fieldset class="multiswitch">
				<label>
					Доход
					<input type="radio" value="income" name="type" v-model="type" />
				</label>
				<label>
					Расход
					<input type="radio" value="expense" name="type" v-model="type" />
				</label>
				<label>
					Перевод
					<input type="radio" value="transfer" name="type" v-model="type" />
				</label>
			</fieldset>

			<div class="date">
				<IconCalendar class="date__icon" />
				<span class="date__value">
					<input class="common-date-input" type="date" v-model="dateString" />
				</span>
			</div>

			<div class="amount">
				<div class="amount__subheading">Сумма</div>
				<div class="amount__value">
					<input class="amount__input common-number-input" type="tel" v-model="amount" />
					₽
				</div>
			</div>

			<div class="categories" v-if="type == 'expense'">
				<div class="subheading">Категория</div>
				<div class="categories__items">
					<label class="category__label">
						<IconHealth class="category__icon" />
						<span class="category__name">Здоровье</span>
						<input
							class="category__input"
							type="radio"
							value="Здоровье"
							name="category"
							v-model="category"
						/>
					</label>
					<label class="category__label">
						<IconGamepad class="category__icon" filled="false" />
						<span class="category__name">Досуг</span>
						<input class="category__input" type="radio" value="Досуг" name="category" v-model="category" />
					</label>
					<label class="category__label">
						<IconHome class="category__icon" />
						<span class="category__name">Дом</span>
						<input class="category__input" type="radio" value="Дом" name="category" v-model="category" />
					</label>
					<label class="category__label">
						<IconCafe class="category__icon" />
						<span class="category__name">Кафе</span>
						<input class="category__input" type="radio" value="Кафе" name="category" v-model="category" />
					</label>
					<label class="category__label">
						<IconEducation class="category__icon" />
						<span class="category__name">Образование</span>
						<input
							class="category__input"
							type="radio"
							value="Образование"
							name="category"
							v-model="category"
						/>
					</label>
					<label class="category__label">
						<IconGrocery class="category__icon" />
						<span class="category__name">Продукты</span>
						<input
							class="category__input"
							type="radio"
							value="Продукты"
							name="category"
							v-model="category"
						/>
					</label>
				</div>
			</div>

			<div class="categories" v-if="type == 'income'">
				<div class="subheading">Категория</div>
				<div class="categories__items">
					<label class="category__label">
						<IconMoney class="category__icon" filled="false" />
						<span class="category__name">Зарплата</span>
						<input
							class="category__input"
							type="radio"
							value="Зарплата"
							name="category"
							v-model="category"
						/>
					</label>
					<label class="category__label">
						<IconGift class="category__icon" filled="false" />
						<span class="category__name">Подарок</span>
						<input
							class="category__input"
							type="radio"
							value="Подарок"
							name="category"
							v-model="category"
						/>
					</label>
					<label class="category__label">
						<IconQuestion class="category__icon" filled="false" />
						<span class="category__name">Другое</span>
						<input class="category__input" type="radio" value="Другое" name="category" v-model="category" />
					</label>
				</div>
			</div>

			<input class="text-input common-text-input" type="text" placeholder="Описание" v-model="description" />
		</div>

		<button class="save-button common-button" @click="submitCreateTransaction">Сохранить</button>
	</div>
</template>

<script setup lang="ts">
	import { useToast } from "vue-toastification";

	definePageMeta({
		layout: "fullscreen",
	});

	const toast = useToast();

	const type = ref("expense");
	const date = ref<Date>(new Date(Date.now()));
	const dateString = ref(date.value.toISOString().split("T")[0]);
	const amount = ref(100);
	const category = ref("leisure");
	const description = ref("");

	const headers = { Authorization: `Bearer ${useCookie("auth.token")!.value}` };
	const { id: userId } = await $fetch("/api/auth/session", { headers });

	async function submitCreateTransaction() {
		const transaction = await $fetch("/api/transaction", {
			method: "post",
			body: {
				amount: amount.value,
				date: date.value,
				type: type.value,
				category: category.value,
				description: description.value,
				creatorId: userId,
			},
		});
		navigateTo("/");
		toast.success(`Сохранена транзакция на ${transaction.amount} ₽`);
	}
</script>

<style scoped lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: 100vh;
	}

	.group {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 16px;
	}

	.heading {
		font-family: $font-main-normal;
		font-size: 24px;
		font-weight: 700;
		text-align: center;
	}

	.multiswitch {
		display: flex;
		background: $color-primary;
		border-radius: 24px;
		padding: 6px;
		color: $color-background;
		margin-bottom: 16px;

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

	.subheading {
		font-weight: 700;
		margin-bottom: 16px;
	}

	.date {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;

		&__icon {
			color: $color-accent;
			font-size: 20px;
		}
		// &__value {
		// }
	}

	.amount {
		margin-bottom: 12px;

		&__subheading {
			margin-bottom: 4px;
			color: $color-secondary;
			text-align: center;
		}

		&__value {
			font-family: $font-main-rounded;
			font-weight: 700;
			font-size: 24px;
			transform: translateX(-22px);
		}

		&__input {
			font-family: $font-main-rounded;
			font-weight: 700;
			font-size: 24px;
			text-align: right;
			width: 110px;
		}
	}
	.categories {
		width: 100%;
		min-height: 280px;
		&__items {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
			justify-content: space-between;
		}
	}

	.category {
		&__label {
			aspect-ratio: 1;
			width: 80px;
			height: auto;
			border-radius: 24px;
			flex-basis: calc(100% / 3 - 6px);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;

			&:has(input:checked) {
				background-color: $color-tertiary;
			}
		}

		&__icon {
			font-size: 48px;
		}

		// &__name {
		// }

		&__input {
			display: none;
		}
	}

	// .text-input{
	// }

	.save-button {
		width: 70%;
	}
</style>
