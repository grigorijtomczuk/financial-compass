import { type UserTaskData, createUserTask } from "~/server/db/user-task";

export default defineEventHandler(async (event) => {
	const data: UserTaskData = await readBody(event);
	return await createUserTask(data);
});
