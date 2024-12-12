<template>
	<div class="container">
		<div class="info-group">
			<IconAppIcon class="app-icon" filled :fontControlled="false" />
			<h1 class="heading">Финансовый Компас</h1>
		</div>

		<form class="form" novalidate @submit.prevent="signInWithCredentials">
			<div class="form__inputs">
				<input
					class="form__text-input common-text-input"
					placeholder="Имя пользователя"
					type="text"
					v-model="login"
					required
				/>
				<input
					class="form__text-input common-text-input"
					placeholder="Пароль"
					type="password"
					v-model="password"
					required
				/>
			</div>

			<button class="form__submit-button common-button" type="submit">Войти</button>
			<NuxtLink class="form__sign-up-link common-link" to="/auth/sign-up">Регистрация</NuxtLink>
		</form>
	</div>
</template>

<script setup lang="ts">
	import { useToast } from "vue-toastification";

	definePageMeta({
		layout: "fullscreen",
		auth: false,
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
	});

	const { signIn } = useAuth();
	const { query } = useRoute();
	const toast = useToast();

	const login = ref("");
	const password = ref("");

	async function signInWithCredentials() {
		const credentials = {
			login: login.value,
			password: password.value,
		};
		try {
			await signIn(credentials, {
				callbackUrl: query.redirect?.toString() ?? "/",
			});
			toast.success("Вход выполнен успешно!");
		} catch (error) {
			toast.error("Неверные данные для входа.");
		}
	}
</script>

<style scoped lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		height: 100vh;
	}

	.info-group {
		max-width: 260px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		gap: 18px;
	}

	.app-icon {
		width: 184px;
	}

	.heading {
		font-family: $font-main-rounded;
		font-size: 32px;
		font-weight: 600;
		text-align: center;
	}

	.form {
		justify-content: space-between;
		align-items: center;
		height: 360px;
		display: flex;
		flex-direction: column;
		max-width: 260px;
		width: 100%;
		flex-basis: 20%;

		&__inputs {
			width: 100%;
			display: flex;
			gap: 16px;
			flex-direction: column;
			align-items: center;
			margin-bottom: 32px;
		}

		&__text-input {
			width: 100%;
		}

		&__sign-up-link {
			margin-top: 16px;
		}

		&__submit-button {
			width: 100%;
		}
	}
</style>
