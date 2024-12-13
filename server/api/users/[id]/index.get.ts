import { getUserById } from "~/server/db/user";

export default defineEventHandler((event) => {
	const id = parseInt(getRouterParam(event, "id")!);
	return getUserById({ id });
});
