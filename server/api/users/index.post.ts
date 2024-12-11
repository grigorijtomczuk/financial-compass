import { type UserData, createUser } from "@/server/db/users";

export default defineEventHandler(async (event) => {
	const data: UserData = await readBody(event);
	return await createUser(data);
});
