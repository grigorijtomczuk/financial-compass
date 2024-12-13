<template>
	<div class="container">
		<div class="info-group">
			<IconAppIcon class="app-icon" filled :fontControlled="false" />
			<h1 class="heading">Финансовый Компас</h1>
		</div>

		<form class="form" novalidate @submit.prevent="checkForm">
			<div class="form__inputs">
				<input
					class="form__text-input common-text-input"
					placeholder="Имя пользователя"
					type="text"
					v-model="login"
				/>
				<input
					class="form__text-input common-text-input"
					placeholder="Пароль"
					type="password"
					v-model="password"
				/>
				<input
					class="form__text-input common-text-input"
					placeholder="Повторите пароль"
					type="password"
					v-model="passwordConfirm"
				/>

				<label class="form__checkbox-label">
					<input class="form__checkbox-input common-checkbox-input" type="checkbox" v-model="policyAgreed" />
					<span class="form__checkbox-label-text">
						Принимаю условия
						<NuxtLink class="common-link" to="" @click.prevent="bottomSheetEula.open()">
							соглашения
						</NuxtLink>
						и
						<NuxtLink class="common-link" to="" @click.prevent="bottomSheetPrivacy.open()"
							>политики конфиденциальности
						</NuxtLink>
					</span>
				</label>
			</div>

			<button class="form__submit-button common-button">Регистрация</button>
			<NuxtLink class="form__link common-link" to="/auth/login">Уже есть аккаунт?</NuxtLink>
		</form>

		<ClientOnly>
			<VueBottomSheet ref="bottomSheetEula" :max-height="600">
				<div class="bottom-sheet-content">
					<h1 class="bottom-sheet-content__heading">Пользовательское соглашение</h1>
					<p class="bottom-sheet-content__paragraph">Дата последнего обновления: 2 декабря 2024 года</p>
					<p class="bottom-sheet-content__paragraph">
						Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует порядок использования
						приложения «Финансовый Компас» (далее — «Приложение»), разработанного ООО «Финансовый Компас».
						Регистрируясь в Приложении или используя его, вы соглашаетесь с условиями данного Соглашения.
					</p>

					<h3 class="bottom-sheet-content__subheading">1. Общие положения</h3>
					<p class="bottom-sheet-content__paragraph">
						1.1. Настоящее Соглашение является юридически обязательным документом между вами (далее —
						«Пользователь») и разработчиком Приложения (далее — «Разработчик»).<br />1.2. Использование
						Приложения разрешается только в соответствии с условиями настоящего Соглашения.<br />1.3. Если
						вы не согласны с условиями данного Соглашения, вы обязаны прекратить использование Приложения.
					</p>

					<h3 class="bottom-sheet-content__subheading">2. Регистрация и авторизация</h3>
					<p class="bottom-sheet-content__paragraph">
						2.1. Для использования Приложения может потребоваться регистрация, включающая создание учётной
						записи с указанием имени пользователя и пароля.<br />2.2. Пользователь несёт ответственность за
						сохранность данных своей учётной записи и обязуется не передавать их третьим лицам.<br />2.3. В
						случае несанкционированного доступа к вашей учётной записи вы обязаны немедленно уведомить
						Разработчика.
					</p>

					<h3 class="bottom-sheet-content__subheading">3. Использование Приложения</h3>
					<p class="bottom-sheet-content__paragraph">
						3.1. Приложение предназначено для отслеживания и анализа личных финансов Пользователя.<br />3.2.
						Пользователь обязуется использовать Приложение исключительно в законных целях.<br />3.3.
						Пользователю запрещено:
					</p>

					<ul class="bottom-sheet-content__list">
						<li>изменять или взламывать Приложение;</li>
						<li>использовать Приложение для передачи вредоносных данных или программ;</li>
						<li>предоставлять ложные данные при регистрации или использовании Приложения.</li>
					</ul>

					<h3 class="bottom-sheet-content__subheading">4. Конфиденциальность данных</h3>
					<p class="bottom-sheet-content__paragraph">
						4.1. Разработчик соблюдает нормы законодательства о защите персональных данных.<br />4.2. В
						процессе использования Приложения могут собираться следующие данные:
					</p>

					<ul class="bottom-sheet-content__list">
						<li>регистрационные данные (имя пользователя);</li>
						<li>финансовая информация, введённая Пользователем.<br /></li>
					</ul>

					<p class="bottom-sheet-content__paragraph">
						4.3. Вся информация используется исключительно для обеспечения работы Приложения и не передаётся
						третьим лицам без согласия Пользователя, за исключением случаев, предусмотренных
						законодательством.<br />4.4. Пользователь может запросить удаление своих данных, обратившись к
						Разработчику.
					</p>

					<h3 class="bottom-sheet-content__subheading">5. Ответственность сторон</h3>
					<p class="bottom-sheet-content__paragraph">
						5.1. Разработчик предоставляет Приложение «как есть» и не гарантирует, что оно будет работать
						безошибочно или соответствовать ожиданиям Пользователя.<br />5.2. Разработчик не несёт
						ответственности за убытки, вызванные использованием или невозможностью использования
						Приложения.<br />5.3. Пользователь несёт полную ответственность за достоверность данных,
						введённых в Приложение.
					</p>

					<h3 class="bottom-sheet-content__subheading">6. Интеллектуальная собственность</h3>
					<p class="bottom-sheet-content__paragraph">
						6.1. Все права на Приложение, включая программный код, элементы интерфейса и дизайн, принадлежат
						Разработчику.<br />6.2. Пользователь получает ограниченное право на использование Приложения
						исключительно в личных целях.<br />6.3. Копирование, распространение и иное использование
						Приложения без согласия Разработчика запрещено.
					</p>

					<h3 class="bottom-sheet-content__subheading">7. Изменения в Соглашении</h3>
					<p class="bottom-sheet-content__paragraph">
						7.1. Разработчик оставляет за собой право вносить изменения в настоящее Соглашение.<br />7.2.
						Изменения вступают в силу с момента публикации обновлённого Соглашения в Приложении. Продолжение
						использования Приложения после изменений означает согласие Пользователя с новой редакцией.
					</p>

					<h3 class="bottom-sheet-content__subheading">8. Прекращение использования</h3>
					<p class="bottom-sheet-content__paragraph">
						8.1. Пользователь может прекратить использование Приложения в любой момент, удалив свою учётную
						запись.<br />8.2. Разработчик оставляет за собой право заблокировать учётную запись Пользователя
						в случае нарушения условий данного Соглашения.
					</p>

					<h3 class="bottom-sheet-content__subheading">9. Контактная информация</h3>
					<p class="bottom-sheet-content__paragraph">
						Если у вас возникли вопросы или предложения, вы можете связаться с Разработчиком:<br />
						Электронная почта: feedback@financial-compass-app.ru
					</p>

					<p class="bottom-sheet-content__paragraph">
						Приняв условия настоящего Соглашения, вы подтверждаете, что ознакомились с его содержанием и
						полностью согласны с его условиями.
					</p>
				</div>
			</VueBottomSheet>

			<VueBottomSheet ref="bottomSheetPrivacy" :max-height="600">
				<div class="bottom-sheet-content">
					<h1 class="bottom-sheet-content__heading">Политика конфиденциальности</h1>
					<p class="bottom-sheet-content__paragraph">Дата вступления в силу: 2 декабря 2024 года</p>
					<p class="bottom-sheet-content__paragraph">
						Мы, разработчики приложения «Финансовый Компас» (далее — «Приложение»), уважаем вашу
						конфиденциальность и стремимся защищать вашу личную информацию. Настоящая Политика
						конфиденциальности описывает, какие данные мы собираем, как их используем и защищаем.
					</p>

					<h3 class="bottom-sheet-content__subheading">1. Сбор и использование данных</h3>
					<p class="bottom-sheet-content__paragraph">1.1. Данные, которые мы собираем:</p>

					<ul class="bottom-sheet-content__list">
						<li>
							регистрационные данные: имя пользователя, предоставленное вами при создании учётной записи;
						</li>
						<li>
							финансовые данные: информация о доходах, расходах и других данных, которые вы вручную
							добавляете в Приложение.
						</li>
					</ul>
					<p class="bottom-sheet-content__paragraph">1.2. Цели обработки данных:</p>

					<ul class="bottom-sheet-content__list">
						<li>обеспечение работы функционала Приложения;</li>
						<li>хранение и анализ данных для предоставления удобных и полезных финансовых отчетов;</li>
						<!-- <li>улучшение работы Приложения, на основе обезличенных статистических данных.</li> -->
					</ul>

					<p class="bottom-sheet-content__paragraph">
						1.3. Мы не собираем данные автоматически (например, данные о местоположении или устройстве).
					</p>

					<h3 class="bottom-sheet-content__subheading">2. Хранение и защита данных</h3>
					<p class="bottom-sheet-content__paragraph">
						2.1. Все данные хранятся на защищённых серверах ООО «РЕГ.РУ», которые соответствуют современным
						стандартам безопасности.<br />2.2. Мы используем шифрование для защиты вашей информации от
						несанкционированного доступа, изменения или удаления.<br />2.3. Доступ к данным имеют только
						уполномоченные лица, обязанные соблюдать строгую конфиденциальность.
					</p>

					<h3 class="bottom-sheet-content__subheading">3. Передача данных третьим лицам</h3>
					<p class="bottom-sheet-content__paragraph">
						3.1. Мы не передаём ваши данные третьим лицам, кроме случаев, предусмотренных
						законодательством.<br />3.2. В случае привлечения сторонних сервисов для обработки данных
						(например, аналитики), мы гарантируем, что такие сервисы будут соблюдать политику
						конфиденциальности.
					</p>

					<h3 class="bottom-sheet-content__subheading">4. Управление вашей информацией</h3>
					<p class="bottom-sheet-content__paragraph">
						4.1. Доступ к данным: вы можете в любой момент запросить копию вашей информации, связавшись с
						нами.<br />4.2. Удаление данных: вы имеете право запросить удаление вашей учётной записи и всех
						связанных с ней данных.
					</p>

					<h3 class="bottom-sheet-content__subheading">5. Файлы cookie и сторонние трекеры</h3>
					<p class="bottom-sheet-content__paragraph">
						5.1. Приложение использует файлы cookie исключительно для авторизации пользователя и не
						использует сторонние аналитические трекеры для отслеживания вашего поведения.
					</p>

					<h3 class="bottom-sheet-content__subheading">6. Возрастные ограничения</h3>
					<p class="bottom-sheet-content__paragraph">
						6.1. Приложение доступно для использования всем категориям пользователей, независимо от
						возраста.<br />6.2. Пользователи младше 16 лет должны убедиться, что их использование Приложения
						одобрено родителями или опекунами.
					</p>

					<h3 class="bottom-sheet-content__subheading">7. Изменения в Политике конфиденциальности</h3>
					<p class="bottom-sheet-content__paragraph">
						7.1. Мы оставляем за собой право обновлять настоящую Политику конфиденциальности.<br />7.2.
						Обновления вступают в силу с момента их публикации в Приложении. Мы рекомендуем регулярно
						проверять эту страницу на наличие изменений.
					</p>

					<h3 class="bottom-sheet-content__subheading">8. Контактная информация</h3>
					<p class="bottom-sheet-content__paragraph">
						Если у вас возникли вопросы о настоящей Политике конфиденциальности, вы можете связаться с
						нами:<br />Электронная почта: feedback@financial-compass-app.ru
					</p>

					<p class="bottom-sheet-content__paragraph">
						Используя наше Приложение, вы подтверждаете, что ознакомлены с данной Политикой
						конфиденциальности и согласны с её условиями.
					</p>
				</div>
			</VueBottomSheet>
		</ClientOnly>
	</div>
</template>

<script setup lang="ts">
	import { useToast } from "vue-toastification";
	import { isEmpty } from "validator";

	// @ts-ignore
	import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";

	definePageMeta({
		layout: "fullscreen",
		auth: false,
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
	});

	const { signUp } = useAuth();
	const toast = useToast();

	const login = ref("");
	const password = ref("");
	const passwordConfirm = ref("");
	const policyAgreed = ref(false);

	const bottomSheetEula = ref<InstanceType<typeof VueBottomSheet>>();
	const bottomSheetPrivacy = ref<InstanceType<typeof VueBottomSheet>>();

	// TODO: Better do that on server-side
	function checkForm() {
		let errors: {
			field: string;
			error: string;
		}[] = new Array();

		if (isEmpty(login.value)) {
			errors.push({ field: "Имя пользователя", error: "Поле обязательное" });
		} else {
			if (login.value.length < 5) {
				errors.push({ field: "Имя пользователя", error: "Минимум 5 символов" });
			}
		}

		if (isEmpty(password.value)) {
			errors.push({ field: "Пароль", error: "Поле обязательное" });
		} else {
			if (password.value.length < 5) {
				errors.push({ field: "Пароль", error: "Минимум 5 символов" });
			}
		}

		if (isEmpty(passwordConfirm.value)) {
			errors.push({ field: "Повторите пароль", error: "Поле обязательное" });
		} else {
			if (password.value != passwordConfirm.value) {
				errors.push({ field: "Пароли", error: "Пароли не совпадают" });
			}
		}

		if (!policyAgreed.value) {
			errors.push({ field: "EULA", error: "Необходимо согласие" });
		}

		if (errors.length > 0) {
			let message = "";
			errors.forEach((error) => {
				message += `${error.field}: ${error.error.toLowerCase()}\n`;
			});
			toast.error(message);
		} else {
			signUpWithCredentials();
		}
	}

	async function signUpWithCredentials() {
		const credentials = {
			login: login.value,
			password: password.value,
		};
		try {
			await signUp(credentials, { callbackUrl: "/" });
			toast.success("Аккаунт успешно создан!");
		} catch (error) {
			toast.error("Что-то пошло не так.");
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
		flex-basis: 30%;

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

		&__checkbox-input {
			margin: 8px;
			aspect-ratio: 1;
		}

		&__checkbox-label {
			display: flex;
			align-items: center;
			margin-top: 12px;
			gap: 4px;
			// &-text {
			// }
		}

		&__link {
			margin-top: 16px;
		}

		&__submit-button {
			width: 100%;
		}
	}

	.bottom-sheet-content {
		width: 90%;
		margin: 0 auto;
		margin-bottom: 32px;

		&__heading {
			font-size: 24px;
			font-weight: 700;
			& + * {
				margin-top: 12px;
			}
		}

		&__subheading {
			font-size: 18px;
			font-weight: 700;
			& + * {
				margin-top: 12px;
			}
		}

		&__paragraph {
			& + * {
				margin-top: 12px;
			}
		}

		&__list {
			list-style-type: disc;
			list-style-position: inside;
			padding-left: 24px;

			& + * {
				margin-top: 12px;
			}
		}
	}
</style>
