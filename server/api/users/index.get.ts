import { getServerSession } from "#auth";
import { getUsers } from "~/server/db/user";

// TODO: API Route Protection needed!
// https://auth.sidebase.io/guide/authjs/server-side/session-access

export default defineEventHandler(async (event) => {
	return await getUsers();
});
