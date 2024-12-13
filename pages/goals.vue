<template>
	<h1 class="heading">Цели и задачи</h1>

	<fieldset class="multiswitch">
		<label>
			Цели
			<input type="radio" value="goals" name="tab" v-model="openedTab" />
		</label>
		<label>
			Задачи
			<input type="radio" value="tasks" name="tab" v-model="openedTab" />
		</label>
	</fieldset>

	<div class="goals-tab" v-if="openedTab == 'goals'">Цели</div>

	<div class="tasks-tab" v-if="openedTab == 'tasks'">
		<ol class="task-list">
			<li
				class="task-list__item"
				v-for="(item, index) in tasks"
				:data-number="index + 1"
				@click="submitDeleteUserTask(item.id, index)"
			>
				{{ item.text }}
			</li>
			<li class="task-list__item" data-number="+">
				<input
					class="task-list__item_create common-text-input"
					type="text"
					placeholder="Добавить задачу"
					v-model="newUserTask"
					@keyup="submitCreateUserTask($event)"
				/>
			</li>
		</ol>
	</div>
</template>

<script setup lang="ts">
	const openedTab = useState("opened-tab", () => "goals");

	const newUserTask = ref("");

	let { data } = await useFetch("/api/user-task");
	const tasks = ref(data.value?.tasks);

	const headers = { Authorization: `Bearer ${useCookie("auth.token")!.value}` };
	const { id: userId } = await $fetch("/api/auth/session", { headers });

	async function submitCreateUserTask(event: KeyboardEvent) {
		if (event.key == "Enter") {
			const task = await $fetch("/api/user-task", {
				method: "post",
				body: {
					text: newUserTask.value,
					creatorId: userId,
				},
			});
			tasks.value?.push(task);
			newUserTask.value = "";
		}
	}

	async function submitDeleteUserTask(id: number, index: number) {
		await $fetch(`/api/user-task/${id}`, { method: "delete" });
		tasks.value?.splice(index, 1);
	}
</script>

<style scoped lang="scss">
	.heading {
		font-weight: 700;
		font-size: 24px;
		margin-bottom: 24px;
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

	.task-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		overflow: scroll;
		max-height: 470px;

		&__item {
			display: flex;
			gap: 20px;
			align-items: center;

			&::before {
				content: attr(data-number);
				background-color: $color-accent;
				color: $color-background;
				border-radius: 50%;
				display: block;
				width: 48px;
				height: auto;
				aspect-ratio: 1;
				line-height: 48px;
				text-align: center;
				font-size: 24px;
				font-weight: 700;
			}

			&_create {
				width: 70%;
			}
		}
	}
</style>
