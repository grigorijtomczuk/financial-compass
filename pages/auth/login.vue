<template>
	<div class="container">
		<div class="info-group">
			<IconAppIcon class="app-icon" filled :fontControlled="false" />
			<h1 class="heading">Финансовый Компас</h1>
		</div>

		<form class="form" :novalidate="true" @submit.prevent="signInWithCredentials">
			<div class="form__inputs">
				<input
					class="form__text-input common-text-input"
					placeholder="Логин"
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
				<NuxtLink class="form__sign-up-link common-link" to="/auth/sign-up">Регистрация</NuxtLink>
			</div>
			<button class="form__submit-button common-button" type="submit">Войти</button>
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
			login: "login",
			password: "pass",
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
		z-index: 110;
		position: relative;
		background-color: $color-background;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: 100vh;
	}

	.container {
		z-index: 110;
		position: relative;
		background-color: $color-background;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
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

		&__inputs {
			width: 100%;
			display: flex;
			gap: 16px;
			flex-direction: column;
			align-items: center;
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
