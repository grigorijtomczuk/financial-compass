import { getUserTaskById } from "~/server/db/user-task";

export default defineEventHandler((event) => {
	const id = parseInt(getRouterParam(event, "id")!);
	return getUserTaskById({ id });
});
