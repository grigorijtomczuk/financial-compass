import { createUser, getUserByLogin } from "@/server/db/users";
import { genSalt, hash } from "bcrypt";

import HttpStatusCodes from "http-status-codes";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const candidate = await getUserByLogin({ login: body.login });

	if (candidate) {
		throw createError({
			statusCode: HttpStatusCodes.CONFLICT,
			statusMessage: "Login already taken",
		});
	}

	const salt = await genSalt();
	const passwordHash = await hash(body.password, salt);

	const user = await createUser({ login: body.login, passwordHash });

	return user;
});
