import { type UserData, createUser } from "~/server/db/user";

export default defineEventHandler(async (event) => {
	const data: UserData = await readBody(event);
	return await createUser(data);
});
