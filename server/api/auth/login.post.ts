import HttpStatusCodes from "http-status-codes";
import { compare } from "bcrypt";
import { getUserByLogin } from "~/server/db/user";
import { sign } from "jsonwebtoken";

const refreshTokens: Record<string, Record<string, any>> = {};
export const SECRET = process.env.AUTH_SECRET!;

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const candidate = await getUserByLogin({ login: body.login });

	if (!candidate) {
		throw createError({
			statusCode: HttpStatusCodes.NOT_FOUND,
			statusMessage: "User not found",
		});
	}

	const passwordMatched = await compare(body.password, candidate.passwordHash);

	if (!passwordMatched) {
		throw createError({
			statusCode: HttpStatusCodes.FORBIDDEN,
			statusMessage: "Unauthorized",
		});
	}

	const expiresIn = "30d";
	const refreshToken = (Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1).toString();

	const user = {
		id: candidate.id,
		login: candidate.login,
	};

	const accessToken = sign(user, SECRET, { expiresIn });
	refreshTokens[refreshToken] = {
		accessToken,
		user,
	};

	return {
		token: {
			accessToken,
			refreshToken,
		},
	};
});
