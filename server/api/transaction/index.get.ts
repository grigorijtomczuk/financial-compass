import { getUserTransactions } from "~/server/db/user";

export default defineEventHandler(async (event) => {
	const headers = { Authorization: `Bearer ${getCookie(event, "auth.token")!}` };
	const { id: userId } = await $fetch("/api/auth/session", { headers });

	return await getUserTransactions({ id: userId });
});
