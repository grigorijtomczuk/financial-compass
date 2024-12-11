import { sign } from "jsonwebtoken";

const refreshTokens: Record<string, Record<string, any>> = {};
export const SECRET = process.env.AUTH_SECRET!;

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	if (body.login !== "login" || body.password !== "pass") {
		throw createError({
			statusCode: 403,
			statusMessage: "Unauthorized",
		});
	}

	const expiresIn = "30d";
	const refreshToken = (Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1).toString();
	const { login } = body;
	const user = {
		login,
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
