import { getUsers } from "~/server/db/user";

// TODO: API Route Protection needed!

export default defineEventHandler(async (event) => {
	return await getUsers();
});
